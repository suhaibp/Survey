import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResponseEmailComponent } from './user-response-email.component';

describe('UserResponseEmailComponent', () => {
  let component: UserResponseEmailComponent;
  let fixture: ComponentFixture<UserResponseEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResponseEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResponseEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
