import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@bba/material';
import { ModuleOutletModule } from '@bba/module-outlet';
import { CellsFacade } from '@bba/core-state';
import { provideMockStore } from '@ngrx/store/testing';
import { CellsSocketService, CoreDataModule } from '@bba/core-data';
import { of } from 'rxjs';

const mockCellsSocketService = {
  updateCellMutation$: of(null),
  createCellMutation$: of(null),
  deleteCellMutation$: of(null)
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        ModuleOutletModule,
        CoreDataModule
      ],
      providers: [
        CellsFacade,
        provideMockStore(),
        { provide: CellsSocketService, useValue: mockCellsSocketService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
