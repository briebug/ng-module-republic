import { Component } from '@angular/core';

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'secondary';
  links = [
    { path: '/', icon: 'home', title: 'home' },
  ];

  constructor() {}

  logout() { }

  toggleSidenav() { }

}