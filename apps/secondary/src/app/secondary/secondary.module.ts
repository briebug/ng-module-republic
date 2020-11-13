import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryComponent } from './secondary.component';
import { SecondaryRoutingModule } from './secondary-routing.module';

@NgModule({
  declarations: [SecondaryComponent],
  imports: [CommonModule, SecondaryRoutingModule]
})
export class SecondaryModule { }
