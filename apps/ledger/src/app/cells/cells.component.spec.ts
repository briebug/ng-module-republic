import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsComponent } from './cells.component';

describe('CellsComponent', () => {
  let component: CellsComponent;
  let fixture: ComponentFixture<CellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellsComponent ]
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
