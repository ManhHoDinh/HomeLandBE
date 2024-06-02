import { Complain } from "../entities/complain.entity";
import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Column } from "typeorm";

export class CreateComplainDto extends PickType(Complain, [
    "content",
] as const) {
    @ApiProperty()
    @IsString()
    @Column()
    resident_id: string
}
