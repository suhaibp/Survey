import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveySuccessComponent } from './user-survey-success.component';

describe('UserSurveySuccessComponent', () => {
  let component: UserSurveySuccessComponent;
  let fixture: ComponentFixture<UserSurveySuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveySuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
