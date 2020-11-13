import { Injectable } from '@nestjs/common';
import { CreateCellDto } from './dto/create-cell.dto';
import { UpdateCellDto } from './dto/update-cell.dto';
import { WebSocketServer } from '@nestjs/websockets';
import { InjectInMemoryDBService, InMemoryDBService } from '@nestjs-addons/in-memory-db'
import * as io from 'socket.io-client';
import { Cell } from '@bba/api-interfaces';
import { Server } from 'socket.io';

const cells: Cell[] = [
  {
    id: '1',
    title: 'Primary',
    description: '',
    componentName: 'PrimaryComponent',
    remoteName: 'primary',
    uri: 'http://localhost:4202/remoteEntry.js',
    module: './Primary',
    published: false,
    healthy: false
  },
  {
    id: '2',
    title: 'Secondary',
    description: '',
    componentName: 'SecondaryComponent',
    remoteName: 'secondary',
    uri: 'http://localhost:4203/remoteEntry.js',
    module: './Secondary',
    published: false,
    healthy: false
  }
]


@Injectable()
export class CellsService {
  @WebSocketServer()
  server = io('http://localhost:80');

  constructor(@InjectInMemoryDBService('cells') private readonly cellService: InMemoryDBService<Cell>) {
    this.cellService.createMany(cells);
  }

  create(createCellDto: CreateCellDto) {
    this.server.emit('create', createCellDto);
    return this.cellService.create(createCellDto);
  }

  findAll() {
    return this.cellService.getAll();
  }

  findOne(id: string) {
    return this.cellService.get(id);
  }

  update(id: string, updateCellDto: UpdateCellDto) {
    this.server.emit('update', updateCellDto);
    this.cellService.update({ ...updateCellDto, id: id });
    return updateCellDto;
  }

  remove(id: string) {
    const deletedCell = this.cellService.get(id);
    if (deletedCell) this.cellService.delete(id);
    this.server.emit('delete', deletedCell);
    return deletedCell;
  }
}
