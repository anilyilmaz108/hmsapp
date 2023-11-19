import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSimulatorComponent } from './admin-simulator.component';

describe('AdminSimulatorComponent', () => {
  let component: AdminSimulatorComponent;
  let fixture: ComponentFixture<AdminSimulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSimulatorComponent]
    });
    fixture = TestBed.createComponent(AdminSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
