import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChat1Component } from './admin-chat1.component';

describe('AdminChat1Component', () => {
  let component: AdminChat1Component;
  let fixture: ComponentFixture<AdminChat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
