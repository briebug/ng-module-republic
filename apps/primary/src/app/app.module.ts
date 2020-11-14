import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimaryComponent } from './primary/primary.component';
import { MaterialModule } from '@bba/material';

@NgModule({
  declarations: [AppComponent, PrimaryComponent],
  imports: [BrowserModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
