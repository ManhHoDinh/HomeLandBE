import { PickType } from "@nestjs/swagger";
import { ItemRepairInvoice } from "src/itemRepairInvoice/entities/itemRepairInvoice.entity";

export class CreateItemRepairInvoiceDto extends PickType(ItemRepairInvoice, [
    "content",
    "price"
]) { }