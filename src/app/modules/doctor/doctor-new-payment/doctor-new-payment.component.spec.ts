import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNewPaymentComponent } from './doctor-new-payment.component';

describe('DoctorNewPaymentComponent', () => {
  let component: DoctorNewPaymentComponent;
  let fixture: ComponentFixture<DoctorNewPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorNewPaymentComponent]
    });
    fixture = TestBed.createComponent(DoctorNewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
