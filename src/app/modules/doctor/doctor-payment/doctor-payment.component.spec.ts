import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPaymentComponent } from './doctor-payment.component';

describe('DoctorPaymentComponent', () => {
  let component: DoctorPaymentComponent;
  let fixture: ComponentFixture<DoctorPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorPaymentComponent]
    });
    fixture = TestBed.createComponent(DoctorPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
