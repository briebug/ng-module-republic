import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cell } from '@bba/api-interfaces';

@Component({
  selector: 'bba-cells-list',
  templateUrl: './cells-list.component.html',
  styleUrls: ['./cells-list.component.scss']
})
export class CellsListComponent {
  @Input() cells: Cell[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}