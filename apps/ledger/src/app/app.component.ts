import { Component } from '@angular/core';

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/cells', icon: 'view_list', title: 'Cells' },
  ];

  logout() {  }

  toggleSidenav() { }
}