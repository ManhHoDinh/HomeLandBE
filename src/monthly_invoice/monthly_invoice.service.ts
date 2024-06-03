import { Injectable } from '@nestjs/common';
import { CreateMonthlyInvoiceDto } from './dto/create-monthly_invoice.dto';
import { UpdateMonthlyInvoiceDto } from './dto/update-monthly_invoice.dto';

@Injectable()
export class MonthlyInvoiceService {
  create(createMonthlyInvoiceDto: CreateMonthlyInvoiceDto) {
    return 'This action adds a new monthlyInvoice';
  }

  findAll() {
    return `This action returns all monthlyInvoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} monthlyInvoice`;
  }

  update(id: number, updateMonthlyInvoiceDto: UpdateMonthlyInvoiceDto) {
    return `This action updates a #${id} monthlyInvoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} monthlyInvoice`;
  }
}
