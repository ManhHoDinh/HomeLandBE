import { Module } from '@nestjs/common';
import { MomoService } from './momo.service';
import { MomoController } from './momo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthlyInvoice } from 'src/monthly_invoice/entities/monthly_invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MonthlyInvoice])],
  controllers: [MomoController],
  providers: [MomoService],
  exports: [MomoService]
})
export class MomoModule { }
