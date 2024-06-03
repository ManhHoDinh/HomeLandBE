import { IsInt, IsString } from "class-validator";

export class CreateMonthlyInvoiceDto {
    @IsInt()
    amount_water: number;
    
    @IsInt()
    amount_management: number;

    @IsString()
    resident_id: string;
}
