import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeletedUsersComponent } from './admin-deleted-users.component';

describe('AdminDeletedUsersComponent', () => {
  let component: AdminDeletedUsersComponent;
  let fixture: ComponentFixture<AdminDeletedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeletedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeletedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
