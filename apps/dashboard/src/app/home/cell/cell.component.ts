import { Component, ComponentFactoryResolver, Injector, Input, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { CellOptions } from '@bba/api-interfaces';
import { loadRemoteModule } from '@bba/core-data';

@Component({
  selector: 'bba-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) { }

  @Input() cell: CellOptions;

  async ngOnChanges() {
    console.log(this.cell);
    this.viewContainer.clear();

    const component = await loadRemoteModule(this.cell)
      .then(m => m[this.cell.componentName]);

    const factory = this.cfr.resolveComponentFactory(component);

    this.viewContainer.createComponent(factory, null, this.injector);
  }
}