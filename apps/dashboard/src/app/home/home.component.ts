import { Component, OnInit } from '@angular/core';
import { CellsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCells$ = this.cellsFacade.allCells$;

  constructor(
    private cellsFacade: CellsFacade
  ) {}

  ngOnInit(): void {
    this.cellsFacade.loadCells();
  }

}
