import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SecondaryComponent } from "./secondary.component";

const routes: Routes = [{ path: "", component: SecondaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondaryRoutingModule {}