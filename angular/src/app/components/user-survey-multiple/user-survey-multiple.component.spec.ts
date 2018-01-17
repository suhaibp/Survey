import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveyMultipleComponent } from './user-survey-multiple.component';

describe('UserSurveyMultipleComponent', () => {
  let component: UserSurveyMultipleComponent;
  let fixture: ComponentFixture<UserSurveyMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveyMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveyMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
