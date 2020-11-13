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
  create(@MessageBody() data: any): Observable<WsResponse<unknown>> {
    this.server.emit('create', data);
    return data;
  }

  @SubscribeMessage('update')
  update(@MessageBody() data: any): Observable<WsResponse<unknown>> {
    this.server.emit('update', data);
    return data;
  }

  @SubscribeMessage('delete')
  delete(@MessageBody() data: any): Observable<WsResponse<unknown>> {
    this.server.emit('delete', data);
    return data;
  }

}