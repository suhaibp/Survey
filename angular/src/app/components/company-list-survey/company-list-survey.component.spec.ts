import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListSurveyComponent } from './company-list-survey.component';

describe('CompanyListSurveyComponent', () => {
  let component: CompanyListSurveyComponent;
  let fixture: ComponentFixture<CompanyListSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyListSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyListSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
