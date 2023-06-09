import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCycleComponent } from './edit-cycle.component';

describe('EditCycleComponent', () => {
  let component: EditCycleComponent;
  let fixture: ComponentFixture<EditCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
