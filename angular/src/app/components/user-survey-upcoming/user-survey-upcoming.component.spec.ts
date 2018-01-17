import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveyUpcomingComponent } from './user-survey-upcoming.component';

describe('UserSurveyUpcomingComponent', () => {
  let component: UserSurveyUpcomingComponent;
  let fixture: ComponentFixture<UserSurveyUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveyUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveyUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
