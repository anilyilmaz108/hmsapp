import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDruptadeComponent } from './admin-druptade.component';

describe('AdminDruptadeComponent', () => {
  let component: AdminDruptadeComponent;
  let fixture: ComponentFixture<AdminDruptadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDruptadeComponent]
    });
    fixture = TestBed.createComponent(AdminDruptadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
