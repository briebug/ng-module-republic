import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleOutletComponent } from './module-outlet/module-outlet.component';
import { MaterialModule } from '@bba/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [ModuleOutletComponent],
  exports: [ModuleOutletComponent]
})
export class ModuleOutletModule {}
