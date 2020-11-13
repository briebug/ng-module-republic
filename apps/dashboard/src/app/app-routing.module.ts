import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@bba/core-data';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  // { path: '**', redirectTo: '/' },
  {
    path: "secondary",
    outlet: "secondary",
    loadChildren: () =>
      loadRemoteModule({
        remoteName: "secondary",
        remoteEntry: "http://localhost:4203/remoteEntry.js",
        exposedModule: "SecondaryModule",
      }).then((m) => m.SecondaryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class RoutingModule { }