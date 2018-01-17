import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageIndustryComponent } from './admin-manage-industry.component';

describe('AdminManageIndustryComponent', () => {
  let component: AdminManageIndustryComponent;
  let fixture: ComponentFixture<AdminManageIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
