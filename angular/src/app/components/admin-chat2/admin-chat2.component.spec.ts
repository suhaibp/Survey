import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChat2Component } from './admin-chat2.component';

describe('AdminChat2Component', () => {
  let component: AdminChat2Component;
  let fixture: ComponentFixture<AdminChat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
