import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyInvoiceService } from './monthly_invoice.service';

describe('MonthlyInvoiceService', () => {
  let service: MonthlyInvoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonthlyInvoiceService],
    }).compile();

    service = module.get<MonthlyInvoiceService>(MonthlyInvoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
