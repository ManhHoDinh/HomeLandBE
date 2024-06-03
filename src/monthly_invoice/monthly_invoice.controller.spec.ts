import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyInvoiceController } from './monthly_invoice.controller';
import { MonthlyInvoiceService } from './monthly_invoice.service';

describe('MonthlyInvoiceController', () => {
  let controller: MonthlyInvoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonthlyInvoiceController],
      providers: [MonthlyInvoiceService],
    }).compile();

    controller = module.get<MonthlyInvoiceController>(MonthlyInvoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
