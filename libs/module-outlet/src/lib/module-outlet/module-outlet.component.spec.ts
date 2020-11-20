import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOutletComponent } from './module-outlet.component';
import { MaterialModule } from '@bba/material';

describe('ModuleOutletComponent', () => {
  let component: ModuleOutletComponent;
  let fixture: ComponentFixture<ModuleOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleOutletComponent],
      imports: [MaterialModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
