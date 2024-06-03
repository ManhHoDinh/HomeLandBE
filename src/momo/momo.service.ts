import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MonthlyInvoice } from 'src/monthly_invoice/entities/monthly_invoice.entity';
import { Repository } from 'typeorm';

export interface IPNPayload {
  invoiceId: number;
}
@Injectable()
export class MomoService {
  constructor(
    @InjectRepository(MonthlyInvoice)
    private readonly monthlyInvoiceRepository: Repository<MonthlyInvoice>
  ) { }
  async generatePaymentURL(monthlyInvoiceId: number, redirectURL: string) {
    let invoice = await this.monthlyInvoiceRepository.findOne({ where: { id: monthlyInvoiceId } });
    if (!invoice) throw new NotFoundException(`Invoice with id ${monthlyInvoiceId} not found`);
    if (invoice.status === 'PAID') throw new ConflictException(`Invoice with id ${monthlyInvoiceId} already paid`);
    const ipnPayload: IPNPayload = { invoiceId: invoice.id };

    let partnerCode = "MOMO";
    let accessKey = process.env.MOMO_ACCESS_KEY;
    let secretkey = process.env.MOMO_SECRET_KEY;
    let requestId = partnerCode + new Date().getTime();
    let orderId = invoice.id.toString() + new Date().getTime();
    let orderInfo = "Thanh toán đơn hàng hàng tháng" + invoice.id;
    let redirectUrl = redirectURL;
    let ipnUrl = process.env.HOST_URL + '/monthly_invoice/ipn_momo_webhook'
    let amount = (invoice.amount_water + invoice.amount_management).toString();
    let requestType = "captureWallet"
    let extraData = btoa(JSON.stringify(ipnPayload));
    let rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType

    const crypto = require('crypto');
    let signature = crypto.createHmac('sha256', secretkey)
      .update(rawSignature)
      .digest('hex');

    //json object send to MoMo endpoint
    const requestBody = JSON.stringify({
      partnerCode: partnerCode,
      accessKey: accessKey,
      requestId: requestId,
      amount: amount,
      orderId: orderId,
      orderInfo: orderInfo,
      redirectUrl: redirectUrl,
      ipnUrl: ipnUrl,
      extraData: extraData,
      requestType: requestType,
      signature: signature,
      lang: 'en'
    });

    let res = await fetch('https://test-payment.momo.vn/v2/gateway/api/create', {
      method: 'POST',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody).toString()
      }
    });
    let data = await res.json();
    console.log(data);
    return data;
  }
}
