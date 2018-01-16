import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChatd3Component } from './admin-chatd3.component';

describe('AdminChatd3Component', () => {
  let component: AdminChatd3Component;
  let fixture: ComponentFixture<AdminChatd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChatd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChatd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
