import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyBlockedComponent } from './admin-company-blocked.component';

describe('AdminCompanyBlockedComponent', () => {
  let component: AdminCompanyBlockedComponent;
  let fixture: ComponentFixture<AdminCompanyBlockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyBlockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
