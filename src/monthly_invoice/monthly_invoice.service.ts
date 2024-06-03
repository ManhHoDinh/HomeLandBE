import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { flatten } from 'lodash';
import moment from 'moment-timezone';
import { MomoService } from 'src/momo/momo.service';
import { UpdateMonthlyInvoiceDto } from 'src/monthly_invoice/dto/update-monthly_invoice.dto';
import { MonthlyInvoice } from 'src/monthly_invoice/entities/monthly_invoice.entity';
import { Resident } from 'src/resident/entities/resident.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MonthlyInvoiceService {
  constructor(
    @InjectRepository(MonthlyInvoice)
    private readonly monthlyInvoiceRepository: Repository<MonthlyInvoice>,
    @InjectRepository(Resident)
    private readonly residentRepository: Repository<Resident>,
    private readonly momoService: MomoService
  ) { }

  async seed() {
    const residents = await this.residentRepository.find();
    await Promise.all(flatten(residents.map((resident) => {
      //create 24 monthly invoices for each resident
      let promises: any = [];
      for (let i = 0; i < 12; i++) {
        const monthlyInvoice = new MonthlyInvoice();
        monthlyInvoice.amount_water = faker.number.int({ min: 50000, max: 5000000 });
        monthlyInvoice.amount_management = 20000
        monthlyInvoice.resident_id = resident.id;
        monthlyInvoice.created_at = moment.tz([2023, i, 1], 'Asia/Bangkok').tz('UTC').toDate();
        promises.push(this.monthlyInvoiceRepository.save(monthlyInvoice));
      }
      for (let i = 0; i < 12; i++) {
        const monthlyInvoice = new MonthlyInvoice();
        monthlyInvoice.amount_water = faker.number.int({ min: 50000, max: 5000000 });
        monthlyInvoice.amount_management = 20000
        monthlyInvoice.resident_id = resident.id;
        monthlyInvoice.created_at = moment.tz([2024, i, 1], 'Asia/Bangkok').tz('UTC').toDate();
        promises.push(this.monthlyInvoiceRepository.save(monthlyInvoice));
      }
      return promises;
    })));
  }


  async findAll(month?: number, year?: number, page_number?: number, page_size?: number) {
    let queryBuilder = this.monthlyInvoiceRepository.createQueryBuilder('monthly_invoice')
    if (month && 0 <= month && month < 12) {
      year = year || new Date().getFullYear();
      queryBuilder = queryBuilder.where('created_at >= :start AND created_at < :end', {
        start: moment.tz([year, month, 1], 'Asia/Bangkok').tz('UTC').toDate(),
        end: moment.tz([year, month + 1, 1], 'Asia/Bangkok').tz('UTC').toDate()
      });
    }
    if (page_number && page_size) {
      queryBuilder = queryBuilder.skip((page_number - 1) * page_size).take(page_size);
    }
    return await queryBuilder.getMany();
  }


  async findOne(id: number) {
    return await this.monthlyInvoiceRepository.findOne({ where: { id } });
  }

  async findByResidentId(residentId: string) {
    return await this.monthlyInvoiceRepository.find({
      where: { resident_id: residentId },
    });
  }

  async update(id: number, updateMonthlyInvoiceDto: UpdateMonthlyInvoiceDto) {
    await this.monthlyInvoiceRepository.update(id, updateMonthlyInvoiceDto);
  }

  async payMomo(id: number, redirectURL: string) {
    console.log('payMomo', id, redirectURL);
    return await this.momoService.generatePaymentURL(id, redirectURL);
  }
}
