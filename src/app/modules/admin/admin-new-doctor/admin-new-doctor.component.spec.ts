import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewDoctorComponent } from './admin-new-doctor.component';

describe('AdminNewDoctorComponent', () => {
  let component: AdminNewDoctorComponent;
  let fixture: ComponentFixture<AdminNewDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNewDoctorComponent]
    });
    fixture = TestBed.createComponent(AdminNewDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
