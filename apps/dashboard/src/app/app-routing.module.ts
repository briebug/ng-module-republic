import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@bba/core-data';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: '**', redirectTo: '/' },
    {
      path: "dashboard",
      loadChildren: () =>
      loadRemoteModule({
        remoteName: "dashboard",
        uri: "http://localhost:4206/remoteEntry.js",
        module: "AppModule",
      }).then((m) => m.AppModule),
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }