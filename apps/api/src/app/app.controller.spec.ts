import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Test, TestingModule } from '@nestjs/testing';
import { CellsModule } from '../cells/cells.module';
import { EventsModule } from '../events/events.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let controller: AppController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      imports: [
        InMemoryDBModule.forRoot(),
        CellsModule,
        EventsModule
      ],
      providers: [
        { provide: AppService, useValue: {} }
      ],
    }).compile();

    controller = app.get<AppController>(AppController);
  });

    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
});