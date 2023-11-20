import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStaffComponent } from './user-staff.component';

describe('UserStaffComponent', () => {
  let component: UserStaffComponent;
  let fixture: ComponentFixture<UserStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStaffComponent]
    });
    fixture = TestBed.createComponent(UserStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
