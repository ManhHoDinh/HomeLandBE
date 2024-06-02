import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonthlyInvoiceService } from './monthly_invoice.service';
import { CreateMonthlyInvoiceDto } from './dto/create-monthly_invoice.dto';
import { UpdateMonthlyInvoiceDto } from './dto/update-monthly_invoice.dto';

@Controller('monthly-invoice')
export class MonthlyInvoiceController {
  constructor(private readonly monthlyInvoiceService: MonthlyInvoiceService) {}

  @Post()
  create(@Body() createMonthlyInvoiceDto: CreateMonthlyInvoiceDto) {
    return this.monthlyInvoiceService.create(createMonthlyInvoiceDto);
  }

  @Get()
  findAll() {
    return this.monthlyInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monthlyInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMonthlyInvoiceDto: UpdateMonthlyInvoiceDto) {
    return this.monthlyInvoiceService.update(+id, updateMonthlyInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monthlyInvoiceService.remove(+id);
  }
}
