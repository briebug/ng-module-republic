import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from '@bba/material';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { RoutingModule } from './routing.module';
import { CellsComponent } from './cells/cells.component';
import { CellsListComponent } from './cells/cells-list/cells-list.component';
import { CellDetailsComponent } from './cells/cell-details/cell-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CellsComponent,
        CellsListComponent,
        CellDetailsComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        UiToolbarModule,
        RoutingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]  
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
