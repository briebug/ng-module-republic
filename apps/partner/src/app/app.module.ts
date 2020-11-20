import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@bba/material';
import { ModuleOutletModule } from '@bba/module-outlet';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  declarations: [AppComponent, FeatureComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ModuleOutletModule,
    UiToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
