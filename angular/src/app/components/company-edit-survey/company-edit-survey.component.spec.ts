import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditSurveyComponent } from './company-edit-survey.component';

describe('CompanyEditSurveyComponent', () => {
  let component: CompanyEditSurveyComponent;
  let fixture: ComponentFixture<CompanyEditSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEditSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
