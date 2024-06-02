import { PartialType } from '@nestjs/mapped-types';
import { CreateMonthlyInvoiceDto } from './create-monthly_invoice.dto';

export class UpdateMonthlyInvoiceDto extends PartialType(CreateMonthlyInvoiceDto) {}
