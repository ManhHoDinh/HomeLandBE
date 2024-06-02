import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { CreateContractDto } from "./create-contract.dto";
import { MemoryStoredFile } from "nestjs-form-data";

export class UpdateContractDto extends OmitType(
    CreateContractDto,
    ['previous_contract_id'] as const,
) {
    @ApiProperty({
        type: "file",
        required: false,
    })
       
    @IsOptional()
    imageUpdate?: MemoryStoredFile;
}
