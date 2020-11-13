import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@bba/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { RoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MicrofrontendService } from '@bba/core-data';

export function initializeApp(
  microfrontendService: MicrofrontendService
): () => Promise<void> {
  return () => microfrontendService.initialise();
}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    UiToolbarModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [
    MicrofrontendService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MicrofrontendService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
