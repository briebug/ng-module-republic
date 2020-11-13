import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryComponent } from './primary.component';
import { PrimaryRoutingModule } from './primary-routing.module';

@NgModule({
  declarations: [PrimaryComponent],
  imports: [CommonModule, PrimaryRoutingModule]
})
export class PrimaryModule { }
