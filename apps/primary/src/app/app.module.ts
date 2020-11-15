import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimaryComponent } from './primary/primary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@bba/material';
import { UiToolbarModule } from '@bba/ui-toolbar';

@NgModule({
  declarations: [AppComponent, PrimaryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
