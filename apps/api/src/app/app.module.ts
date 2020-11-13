import { Module } from '@nestjs/common';
import { CellsModule } from '../cells/cells.module';
import { EventsModule } from '../events/events.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [
    InMemoryDBModule.forRoot(),
    CellsModule,
    EventsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
