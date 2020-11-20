import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '@env';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { CellsSocketService } from './services/cells/cells-socket.service';

const config: SocketIoConfig = { url: environment.websocketEnpoint, options: {} };

@NgModule({
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [CellsSocketService]
})
export class CoreDataModule {}
