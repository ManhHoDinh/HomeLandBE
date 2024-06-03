import { Controller, Get, Post, Body, Patch, Param, HttpCode, Req, Query } from '@nestjs/common';
import { MonthlyInvoiceService } from './monthly_invoice.service';
import { UpdateMonthlyInvoiceDto } from './dto/update-monthly_invoice.dto';
import { InvoiceStatus } from 'src/monthly_invoice/entities/monthly_invoice.entity';
import { ApiExcludeEndpoint, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/helper/decorator/auth.decorator';
import { PersonRole } from 'src/helper/class/profile.entity';
import { CreateMonthlyInvoiceDto } from 'src/monthly_invoice/dto/create-momo-order.dto';

@Controller('monthly_invoice')
@ApiTags('Monthly Invoice')
export class MonthlyInvoiceController {
  constructor(private readonly monthlyInvoiceService: MonthlyInvoiceService) { }

  @Get('/seed')
  seed() {
    return this.monthlyInvoiceService.seed();
  }

  @Get('/self')
  @Auth(PersonRole.RESIDENT)
  findByResidentId(@Req() req) {
    const { id } = req.user;
    return this.monthlyInvoiceService.findByResidentId(id);
  }

  @ApiQuery({ name: 'month', required: false, type: String })
  @ApiQuery({ name: 'year', required: false, type: String })
  @ApiQuery({ name: 'page_size', required: false, type: String, example: '5' })
  @ApiQuery({ name: 'page_number', required: false, type: String, example: '1' })
  @Get()
  async findAll(
    @Query('month') month?: number,
    @Query('year') year?: number,
    @Query('page_size') page_size?: number,
    @Query('page_number') page_number?: number) {
    console.log('month', month);
    console.log('year', year);
    console.log('page_size', page_size);
    console.log('page_number', page_number);
    if (month && 0 <= month && month < 12) {
      if (year && year > 0) {
        return await this.monthlyInvoiceService.findAll(month, year, page_number, page_size);
      }
      else {
        year = new Date().getFullYear();
        return await this.monthlyInvoiceService.findAll(month, year, page_number, page_size);
      }
    }
    return await this.monthlyInvoiceService.findAll(undefined, undefined, page_number, page_size);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monthlyInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMonthlyInvoiceDto: UpdateMonthlyInvoiceDto) {
    return this.monthlyInvoiceService.update(id, updateMonthlyInvoiceDto);
  }

  @Post('/pay_momo')
  async payMomo(@Body() body: CreateMonthlyInvoiceDto) {
    return await this.monthlyInvoiceService.payMomo(body.invoiceId, body.redirectURL);
  }

  @ApiExcludeEndpoint()
  @Post('/ipn_momo_webhook')
  @HttpCode(204)
  async ipnMomoWebhook(@Body() body: any) {
    let payload = JSON.parse(atob(body.extraData))
    console.log('ipnMomoWebhook', payload);
    if (!payload.invoiceId) {
      console.error('expected orderId in extraData')
      console.error(body)
      return;
    }
    await this.monthlyInvoiceService.update(payload.invoiceId, { status: InvoiceStatus.PAID });
    return 'OK';
  }
}
