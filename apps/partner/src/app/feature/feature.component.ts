import { Component } from '@angular/core';
import { Cell } from '@bba/api-interfaces';

@Component({
  selector: 'bba-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
  cell: Cell = {
    id: '',
    title: '',
    description: '',
    uri: 'http://localhost:4202/remoteEntry.js',
    module: './Primary',
    remoteName: 'primary',
    componentName: 'PrimaryComponent',
    healthy: true,
    published: true,
    visible: true,
    version: '1.0.0',
  }
}
