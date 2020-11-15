import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@bba/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { RoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CellsSocketService, CoreDataModule } from '@bba/core-data';
import { CoreStateModule } from '@bba/core-state';
import { CellComponent } from './home/cell/cell.component';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


const config: SocketIoConfig = { url: 'http://localhost:80', options: {} };

@NgModule({
  declarations: [AppComponent, HomeComponent, CellComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    UiToolbarModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
