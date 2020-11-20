import { APP_BASE_HREF } from '@angular/common';
import { APP_ID, Component } from '@angular/core';
import { Cell } from '@bba/api-interfaces';
import { CellsFacade } from '@bba/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  allPublishedCells$: Observable<Cell[]> = this.cellsFacade.allPublishedCells$;
  links = [
    { path: '/', icon: 'home', title: 'home' }
  ];

  constructor(
    private cellsFacade: CellsFacade
  ) {}

  getCellHealthStatusIcon(cell: Cell): string {
    return cell.healthy ? 'signal_wifi_4_bar' : 'signal_wifi_off';
  }

  getCellHealthStatusColor(cell: Cell): string {
    return cell.healthy ? 'green' : 'red';
  }


  logout() { }

  toggleSidenav() { }

  updateCellVisibility(cell: Cell) {
    this.cellsFacade.updateCell({ ...cell, visible: !cell.visible });
  }
}