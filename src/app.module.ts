import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { IdGeneratorModule } from "./id-generator/id-generator.module";
import { StorageModule } from "./storage/storage.module";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { HashModule } from "./hash/hash.module";
import { SeedModule } from "./seed/seed.module";
import { MeModule } from "./me/me.module";
import { ApartmentModule } from "./apartment/apartment.module";
import { TokenModule } from "./token/token.module";
import { ContractModule } from "./contract/contract.module";
import { AvatarGeneratorModule } from "./avatar-generator/avatar-generator.module";
import { NestjsFormDataModule } from "nestjs-form-data";
import { AccountModule } from "./account/account.module";
import { AdminModule } from "./admin/admin.module";
import { EmployeeModule } from "./employee/employee.module";
import { BuildingModule } from "./building/building.module";
import { ResidentModule } from "./resident/resident.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { ServiceModule } from "./service/service.module";
import { ServicePackageModule } from "./service-package/service-package.module";
import { ManagerModule } from "./manager/manager.module";
import { TechnicianModule } from "./technician/technician.module";
import { EquipmentModule } from "./equipment/equipment.module";
import { TaskModule } from "./task/task.module";
import { ComplainModule } from "./complain/complain.module";
import { ItemRepairInvoiceModule } from "./itemRepairInvoice/itemRepairInvoice.module";
import { RepairInvoiceModule } from "./repairInvoice/repairInvoice.module";
import { FloorModule } from "./floor/floor.module";
import { InvoiceModule } from './invoice/invoice.module';
import { Feedback } from "./feedback/entities/feedback.entity";
import { FeedbackModule } from "./feedback/feedback.module";
@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        JwtModule.register({
            secret: process.env.ACCESS_TOKEN_SECRET,
            global: true,
        }),
        TypeOrmModule.forRootAsync({
            useFactory: async () => {
                if (process.env.IS_PRODUCTION == "true") {
                    return {
                        logging: true,
                        type: "postgres",
                        url: process.env.DB_URL,
                        synchronize: true,
                        entities: ["dist/**/*.entity{.ts,.js}"],
                    };
                } else {
                    return {
                        logging: true,
                        type: "postgres",
                        url: process.env.DB_LOCAL_URL,
                        synchronize: true,
                        entities: ["dist/**/*.entity{.ts,.js}"],
                    };
                }
            },
        }),
        AuthModule,
        IdGeneratorModule,
        StorageModule,
        HashModule,
        SeedModule,
        ApartmentModule,
        EmployeeModule,
        MeModule,
        TokenModule,
        ResidentModule,
        BuildingModule,
        ManagerModule,
        FloorModule,
        ContractModule,
        TechnicianModule,
        TaskModule,
        FeedbackModule,
        ComplainModule,
        AvatarGeneratorModule,
        NestjsFormDataModule.config({
            isGlobal: true,
        }),
        AccountModule,
        AdminModule,
        ServiceModule,
        ServicePackageModule,
        VehicleModule,
        EquipmentModule,
        RepairInvoiceModule,
        ItemRepairInvoiceModule,
        InvoiceModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
