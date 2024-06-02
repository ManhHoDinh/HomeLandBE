import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTaskDto {
    @ApiProperty()
    @IsString()
    complain_id: string

    @ApiProperty()
    @IsString()
    assigner_id: string
}
