import { HttpModule, Module } from '@nestjs/common';
import { CellsService } from './cells.service';
import { CellsController } from './cells.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [
    InMemoryDBModule.forFeature('cells'),
    HttpModule,
  ],
  controllers: [CellsController],
  providers: [CellsService]
})
export class CellsModule {}
