import { Module } from '@nestjs/common';
import { MonthlyInvoiceService } from './monthly_invoice.service';
import { MonthlyInvoiceController } from './monthly_invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resident } from 'src/resident/entities/resident.entity';
import { MonthlyInvoice } from 'src/monthly_invoice/entities/monthly_invoice.entity';
import { MomoModule } from 'src/momo/momo.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([MonthlyInvoice, Resident]), MomoModule, AuthModule],
  controllers: [MonthlyInvoiceController],
  providers: [MonthlyInvoiceService],
})
export class MonthlyInvoiceModule { }
