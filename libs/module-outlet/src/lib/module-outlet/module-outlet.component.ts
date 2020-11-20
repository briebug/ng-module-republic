import { Component, ComponentFactoryResolver, Injector, Input, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Cell } from '@bba/api-interfaces';
import { loadRemoteModule } from '@bba/core-data';

@Component({
  selector: 'bba-module-outlet',
  templateUrl: './module-outlet.component.html',
  styleUrls: ['./module-outlet.component.scss']
})
export class ModuleOutletComponent implements OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) { }

  @Input() cell: Cell;

  async ngOnChanges() {
    this.viewContainer.clear();

    const component = await loadRemoteModule(this.cell)
      .then(m => m[this.cell.componentName])
      .catch(err => console.error(err))

    const factory = this.cfr.resolveComponentFactory(component);

    this.viewContainer.createComponent(factory, null, this.injector);
  }
}
