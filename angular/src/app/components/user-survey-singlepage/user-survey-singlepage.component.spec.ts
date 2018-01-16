import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveySinglepageComponent } from './user-survey-singlepage.component';

describe('UserSurveySinglepageComponent', () => {
  let component: UserSurveySinglepageComponent;
  let fixture: ComponentFixture<UserSurveySinglepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveySinglepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveySinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
