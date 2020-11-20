import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@bba/material';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { ModuleOutletModule } from '@bba/module-outlet';
import { RoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { CoreStateModule } from '@bba/core-state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Socket, SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from '@env';

const config: SocketIoConfig = { url: environment.websocketEnpoint, options: {} };

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        UiToolbarModule,
        ModuleOutletModule,
        RoutingModule,
        CoreStateModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: Socket, useValue: {} },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
