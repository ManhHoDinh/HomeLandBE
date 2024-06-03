import { PartialType } from '@nestjs/swagger';
import { CreateMonthlyInvoiceDto } from './create-monthly_invoice.dto';

export class UpdateMonthlyInvoiceDto extends PartialType(CreateMonthlyInvoiceDto) {}
