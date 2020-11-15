import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellsSocketService } from './services/cells/cells-socket.service';

@NgModule({
  imports: [CommonModule],
  providers: [CellsSocketService]
})
export class CoreDataModule {}
