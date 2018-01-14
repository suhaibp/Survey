import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageSurveyAttenderTypeComponent } from './admin-manage-survey-attender-type.component';

describe('AdminManageSurveyAttenderTypeComponent', () => {
  let component: AdminManageSurveyAttenderTypeComponent;
  let fixture: ComponentFixture<AdminManageSurveyAttenderTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageSurveyAttenderTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageSurveyAttenderTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
