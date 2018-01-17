import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySurveyPreviewComponent } from './company-survey-preview.component';

describe('CompanySurveyPreviewComponent', () => {
  let component: CompanySurveyPreviewComponent;
  let fixture: ComponentFixture<CompanySurveyPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySurveyPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySurveyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
