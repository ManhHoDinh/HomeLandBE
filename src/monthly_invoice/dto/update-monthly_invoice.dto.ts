import { IsEnum } from "class-validator";
import { InvoiceStatus } from "src/monthly_invoice/entities/monthly_invoice.entity";

export class UpdateMonthlyInvoiceDto {
    @IsEnum(InvoiceStatus)
    status: InvoiceStatus;
}
