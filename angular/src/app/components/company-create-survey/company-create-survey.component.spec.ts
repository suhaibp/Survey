import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateSurveyComponent } from './company-create-survey.component';

describe('CompanyCreateSurveyComponent', () => {
  let component: CompanyCreateSurveyComponent;
  let fixture: ComponentFixture<CompanyCreateSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCreateSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
