import { loadRemoteModule } from './federation-utils';
import { Routes } from '@angular/router';
import { Microfrontend } from '@bba/api-interfaces';
import { ROUTES } from '../../../../../apps/dashboard/src/app/app-routing.module';

export function buildRoutes(options: Microfrontend[]): Routes {
  const lazyRoutes: Routes = options.map((o) => ({
    path: o.routePath,
    outlet: o.routePath,
    loadChildren: () => loadRemoteModule(o).then((m) => m[o.ngModuleName]),
  }));

  return [...ROUTES, ...lazyRoutes];
}