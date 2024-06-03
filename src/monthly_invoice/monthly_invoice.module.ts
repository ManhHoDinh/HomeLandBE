import { Module } from '@nestjs/common';
import { MonthlyInvoiceService } from './monthly_invoice.service';
import { MonthlyInvoiceController } from './monthly_invoice.controller';

@Module({
  controllers: [MonthlyInvoiceController],
  providers: [MonthlyInvoiceService],
})
export class MonthlyInvoiceModule {}
