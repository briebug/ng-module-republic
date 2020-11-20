import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CellsFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { CellDetailsComponent } from './cell-details/cell-details.component';
import { CellsListComponent } from './cells-list/cells-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { CellsComponent } from './cells.component';

describe('CellsComponent', () => {
  let component: CellsComponent;
  let fixture: ComponentFixture<CellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CellsComponent,
        CellsListComponent,
        CellDetailsComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        CellsFacade,
        provideMockStore({})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
