import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActiveUsersComponent } from './admin-active-users.component';

describe('AdminActiveUsersComponent', () => {
  let component: AdminActiveUsersComponent;
  let fixture: ComponentFixture<AdminActiveUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActiveUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
