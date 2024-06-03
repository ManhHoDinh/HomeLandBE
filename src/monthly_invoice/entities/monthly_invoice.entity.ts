import { Resident } from "src/resident/entities/resident.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum InvoiceStatus {
    PAID = "PAID",
    UNPAID = "UNPAID"
}
@Entity()
export class MonthlyInvoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount_water: number;

    @Column()
    amount_management: number;

    @ManyToOne(() => Resident, resident => resident.monthly_invoices, { nullable: false })
    @JoinColumn({ name: "resident_id" })
    resident: Resident;

    @Column({ name: "resident_id" })
    resident_id: string;

    @Column({ default: InvoiceStatus.UNPAID })
    status: InvoiceStatus;

    @CreateDateColumn()
    created_at: Date | string;
}
