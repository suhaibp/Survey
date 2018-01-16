import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyManageUserGroupsComponent } from './company-manage-user-groups.component';

describe('CompanyManageUserGroupsComponent', () => {
  let component: CompanyManageUserGroupsComponent;
  let fixture: ComponentFixture<CompanyManageUserGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyManageUserGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyManageUserGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
