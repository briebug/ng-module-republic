import { getInMemoryDBServiceToken } from '@nestjs-addons/in-memory-db/dist/common';
import { HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CellsService } from './cells.service';

const mockCellsInMemoryDBService = {
  get: jest.fn(),
  getAll: jest.fn(),
  createMany: jest.fn(),
  queryAsync: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  create: jest.fn()
}

const mockHttpService = {
  get: jest.fn()
}

describe('CellsService', () => {
  let service: CellsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CellsService,
        { provide: getInMemoryDBServiceToken('cells'), useValue: mockCellsInMemoryDBService },
        { provide: HttpService, useValue: mockHttpService }
      ],
    }).compile();

    service = module.get<CellsService>(CellsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
