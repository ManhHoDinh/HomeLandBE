import { Module } from "@nestjs/common";
import { AdminSubscriber } from "./admin.sub";

@Module({
    providers: [AdminSubscriber],
})
export class AdminModule { }
