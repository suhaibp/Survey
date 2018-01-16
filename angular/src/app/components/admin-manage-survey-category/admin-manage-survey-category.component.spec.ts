import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageSurveyCategoryComponent } from './admin-manage-survey-category.component';

describe('AdminManageSurveyCategoryComponent', () => {
  let component: AdminManageSurveyCategoryComponent;
  let fixture: ComponentFixture<AdminManageSurveyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageSurveyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageSurveyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
