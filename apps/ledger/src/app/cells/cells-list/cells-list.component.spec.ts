import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsListComponent } from './cells-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@bba/material';

describe('CellsListComponent', () => {
  let component: CellsListComponent;
  let fixture: ComponentFixture<CellsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CellsListComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
