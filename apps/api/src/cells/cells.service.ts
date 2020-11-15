import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCellDto } from './dto/create-cell.dto';
import { UpdateCellDto } from './dto/update-cell.dto';
import { InjectInMemoryDBService, InMemoryDBService } from '@nestjs-addons/in-memory-db'
import { Cell } from '@bba/api-interfaces';

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

  constructor(@InjectInMemoryDBService('cells') private readonly cellService: InMemoryDBService<Cell>) {
    this.cellService.createMany(cells);
  }

  create(createCellDto: CreateCellDto) {
    const createdCell = this.cellService.create(createCellDto);
    return createdCell
  }

  findAll() {
    return this.cellService.getAll();
  }

  findOne(id: string) {
    return this.cellService.get(id);
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
