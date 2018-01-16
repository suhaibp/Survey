import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestUsersComponent } from './admin-request-users.component';

describe('AdminRequestUsersComponent', () => {
  let component: AdminRequestUsersComponent;
  let fixture: ComponentFixture<AdminRequestUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRequestUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRequestUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
