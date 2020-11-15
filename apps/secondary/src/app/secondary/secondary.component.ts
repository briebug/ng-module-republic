import { Component, ComponentFactoryResolver, Injector, Input, OnChanges, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@bba/core-data';

@Component({
  selector: 'bba-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements OnInit {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) { }

  async ngOnInit() {
    this.viewContainer.clear();
    const cell = {
      uri: 'http://localhost:4202/remoteEntry.js',
      module: './Primary',
      remoteName: 'primary',
      componentName: 'PrimaryComponent'
    }

    const component = await loadRemoteModule(cell)
      .then(m => m[cell.componentName])
      .catch(err => {
        console.log(err);
      })

    const factory = this.cfr.resolveComponentFactory(component);

    this.viewContainer.createComponent(factory, null, this.injector);
  }
}