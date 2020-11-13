import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellDetailsComponent } from './cell-details.component';

describe('CellDetailsComponent', () => {
  let component: CellDetailsComponent;
  let fixture: ComponentFixture<CellDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
