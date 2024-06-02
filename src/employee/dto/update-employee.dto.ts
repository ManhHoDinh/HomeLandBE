import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { CreateEmployeeDto } from "./create-employee.dto";
import { IsOptional } from "class-validator";
import { HasMimeType, IsFile, MaxFileSize, MemoryStoredFile } from "nestjs-form-data";
import { commonImageMIMETypes } from "../../helper/constant";
export class UpdateEmployeeDto extends PartialType(
    OmitType(CreateEmployeeDto, [
        "back_identify_card_photo",
        "front_identify_card_photo",
        "identify_number",
    ] as const),
) {
    @ApiProperty({ type: "file"})
    @IsFile()
    @IsOptional()
    @MaxFileSize(10e6)
    @HasMimeType(commonImageMIMETypes)
    front_identify_card_photo: MemoryStoredFile;

    @ApiProperty({ type: "file"})
    @IsFile()
    @IsOptional()
    @MaxFileSize(10e6)
    @HasMimeType(commonImageMIMETypes)
    back_identify_card_photo: MemoryStoredFile;


}