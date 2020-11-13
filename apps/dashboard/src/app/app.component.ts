import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MicrofrontendService } from '@bba/core-data';

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    // { path: '/', icon: 'home', title: 'home' },
    { path: '/primary', icon: 'view_module', title: 'Dashboard' },
  ];

  constructor(public microfrontendService: MicrofrontendService, private router: Router) {}

  handleLinkClick() {
    this.router.navigateByUrl('primary(secondary:secondary)');
  }

  logout() { }

  toggleSidenav() { }
}