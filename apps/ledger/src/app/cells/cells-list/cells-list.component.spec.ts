import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsListComponent } from './cells-list.component';

describe('CellsListComponent', () => {
  let component: CellsListComponent;
  let fixture: ComponentFixture<CellsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellsListComponent ]
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
