import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MomoService } from './momo.service';
import { CreateMomoDto } from './dto/create-momo.dto';
import { UpdateMomoDto } from './dto/update-momo.dto';

@Controller('momo')
export class MomoController {
  constructor(private readonly momoService: MomoService) { }
}
