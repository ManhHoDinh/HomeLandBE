import {
    Column,
    Entity,
    PrimaryColumn,
    OneToOne,
    DeleteDateColumn,
    CreateDateColumn,
    ManyToOne,
    ManyToMany,
    OneToMany
} from "typeorm";
import { PersonRole, Profile } from "../../helper/class/profile.entity";
import { Account } from "../../account/entities/account.entity";
import { JoinColumn, JoinTable } from "typeorm";


@Entity()
export class Technician {
    @PrimaryColumn()
    id: string;

    @Column(() => Profile)
    profile: Profile;

    @OneToOne(() => Account, {
        nullable: true,
        cascade: true,
    })
    @JoinColumn()
    account?: Account;

   
    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;

    role = PersonRole.TECHNICIAN;
}
