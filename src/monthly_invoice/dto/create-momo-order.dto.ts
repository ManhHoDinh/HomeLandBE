import { IsInt, IsString } from "class-validator";

export class CreateMonthlyInvoiceDto {
    @IsInt()
    invoiceId: number;

    @IsString()
    redirectURL: string;
}