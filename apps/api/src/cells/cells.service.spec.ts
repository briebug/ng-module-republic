import { Test, TestingModule } from '@nestjs/testing';
import { CellsService } from './cells.service';

describe('CellsService', () => {
  let service: CellsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CellsService],
    }).compile();

    service = module.get<CellsService>(CellsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
