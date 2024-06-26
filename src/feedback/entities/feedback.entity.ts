import {
        Column,
        CreateDateColumn,
        DeleteDateColumn,
        Entity,
        JoinColumn,
        ManyToOne,
        PrimaryColumn,
} from "typeorm";
import { Service } from "../../service/entities/service.entity";
import { Resident } from "../../resident/entities/resident.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";


@Entity()
export class Feedback {
        @PrimaryColumn()
        feedback_id: string;

        @ApiProperty({
        })
        @IsString()
        @Column()
        rating: string;

        @ApiProperty({
        })
        @IsOptional()
        @Column({ nullable: true })
        comment?: string;

        @ManyToOne(() => Resident, (resident) => resident.feedback)
        @JoinColumn()
        resident: Resident;

        @ApiProperty({})
        @IsString()
        @Column({ nullable: true })
        resident_id: string;

        @ManyToOne(() => Service, (service) => service.feedback)
        @JoinColumn()
        service: Service;

        @ApiProperty({})
        @IsString()
        @Column({ nullable: true })
        service_id: string;

        @CreateDateColumn()
        created_at: Date;

        @DeleteDateColumn()
        deleted_at?: Date;
}
