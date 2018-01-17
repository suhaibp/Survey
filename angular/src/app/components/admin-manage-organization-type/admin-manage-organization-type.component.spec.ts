import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageOrganizationTypeComponent } from './admin-manage-organization-type.component';

describe('AdminManageOrganizationTypeComponent', () => {
  let component: AdminManageOrganizationTypeComponent;
  let fixture: ComponentFixture<AdminManageOrganizationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageOrganizationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageOrganizationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
