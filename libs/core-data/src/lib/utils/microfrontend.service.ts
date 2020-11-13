import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from './route-utils';
import { Microfrontend } from '@bba/api-interfaces';

@Injectable({
  providedIn: "root"
})
export class MicrofrontendService {
  microfrontends: Microfrontend[];

  constructor(
    private router: Router) {}

  initialise(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      this.router.resetConfig(buildRoutes(this.microfrontends));
      resolve();
    });
  }

  loadConfig(): Microfrontend[] {
    return [
      {
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'primary',
        exposedModule: 'PrimaryModule',
        displayName: 'Primary',
        routePath: 'primary',
        ngModuleName: 'PrimaryModule',
      },
      {
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        remoteName: 'secondary',
        exposedModule: 'SecondaryModule',
        displayName: 'Secondary',
        routePath: 'secondary',
        ngModuleName: 'SecondaryModule',
      },
    ];
  }
}