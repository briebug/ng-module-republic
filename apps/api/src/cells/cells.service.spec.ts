import { getInMemoryDBServiceToken } from '@nestjs-addons/in-memory-db/dist/common';
import { HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CellsService } from './cells.service';

describe('CellsService', () => {
  let service: CellsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CellsService,
        { provide: getInMemoryDBServiceToken('cells'), useValue: {
            get: jest.fn(),
            getAll: jest.fn(),
            createMany: jest.fn(),
            queryAsync: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            create: jest.fn()
          }
        },
        { provide: HttpService, useValue: { get: jest.fn() } }
      ],
    }).compile();

    service = module.get<CellsService>(CellsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
