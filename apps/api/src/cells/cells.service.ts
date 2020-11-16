import { HttpService, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCellDto } from './dto/create-cell.dto';
import { UpdateCellDto } from './dto/update-cell.dto';
import { InjectInMemoryDBService, InMemoryDBService } from '@nestjs-addons/in-memory-db'
import { catchError, flatMap, map } from 'rxjs/operators';
import { Cell } from '@bba/api-interfaces';
import { of, timer } from 'rxjs';
import { environment } from '../environments/environment';
const socket = require('socket.io-client')('http://localhost:80');

const cells: Cell[] = [
  {
    id: '1',
    title: 'Primary',
    description: '',
    componentName: 'PrimaryComponent',
    remoteName: 'primary',
    uri: 'http://localhost:4202/remoteEntry.js',
    module: './Primary',
    published: true,
    healthy: true,
    version: '1.0.0',
    visible: true
  },
  {
    id: '2',
    title: 'Secondary',
    description: '',
    componentName: 'SecondaryComponent',
    remoteName: 'secondary',
    uri: 'http://localhost:4203/remoteEntry.js',
    module: './Secondary',
    published: true,
    healthy: true,
    version: '1.0.0',
    visible: true
  }
]


@Injectable()
export class CellsService {

  constructor(
    @InjectInMemoryDBService('cells') private readonly cellService: InMemoryDBService<Cell>,
    private httpService: HttpService
    ) {
    this.cellService.createMany(cells);
  }

  create(createCellDto: CreateCellDto) {
    const createdCell = this.cellService.create(createCellDto.version ? createCellDto : { ...createCellDto, version: '1.0.0' });
    return createdCell
  }

  findAll() {
    return this.cellService.getAll();
  }

  findOne(id: string) {
    return this.cellService.get(id);
  }

  initHealthCheck() {
    timer(0, environment.healthCheckDelay).subscribe(async () => {
      const publishedCells = await this.cellService.queryAsync((cell) => cell.published === true);
      publishedCells.pipe(
        flatMap((cells: Cell[]) => cells),
        map((cell: Cell) => this.performHealthCheck(cell)),
      ).subscribe()
    })
  }

  async performHealthCheck(cell: Cell) {
    return this.httpService.get(new URL(cell.uri)['origin'], { responseType: 'text' }).pipe(
      map((res) => {
        if (res.status === 200 && cell.healthy === false) {
          socket.emit('update', { ...cell, healthy: true })
          return this.cellService.update({ ...cell, healthy: true });
        }
        if (res.status !== 200 && cell.healthy === true) {
          socket.emit('update', { ...cell, healthy: false })
          return this.cellService.update({ ...cell, healthy: false });
        };
        if (res.status !== 200 && cell.healthy === false) {
          return;
        };
      }),
      catchError((err) => {
        if (cell.healthy === false) return of(false);
        socket.emit('update', { ...cell, healthy: false })
        this.cellService.update({ ...cell, healthy: false });
        return of(false)
      })
    ).subscribe()
  }

  update(id: string, updateCellDto: UpdateCellDto) {
    this.cellService.update({ ...updateCellDto, id: id });
    return updateCellDto;
  }

  remove(id: string) {
    const deletedCell = this.cellService.get(id);
    if (deletedCell) {
      this.cellService.delete(id);
      return deletedCell;
    }
    return new NotFoundException();
  }
}
