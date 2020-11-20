import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from '@bba/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { SecondaryComponent } from './secondary/secondary.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, SecondaryComponent],
      imports: [
        MaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        UiToolbarModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
