import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
  WebSocketServer
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Observable } from 'rxjs';

@WebSocketGateway(80)
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('create')
  create(@MessageBody() data: any) {
    this.server.emit('create', data);
  }

  @SubscribeMessage('update')
  update(@MessageBody() data: any) {
    this.server.emit('update', data);
  }

  @SubscribeMessage('delete')
  delete(@MessageBody() data: any) {
    this.server.emit('delete', data);
  }

}