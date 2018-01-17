import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveyClosedComponent } from './user-survey-closed.component';

describe('UserSurveyClosedComponent', () => {
  let component: UserSurveyClosedComponent;
  let fixture: ComponentFixture<UserSurveyClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveyClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveyClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
