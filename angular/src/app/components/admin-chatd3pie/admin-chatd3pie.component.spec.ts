import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChatd3pieComponent } from './admin-chatd3pie.component';

describe('AdminChatd3pieComponent', () => {
  let component: AdminChatd3pieComponent;
  let fixture: ComponentFixture<AdminChatd3pieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChatd3pieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChatd3pieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
