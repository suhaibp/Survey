import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderTitleComponent } from './admin-header-title.component';

describe('AdminHeaderTitleComponent', () => {
  let component: AdminHeaderTitleComponent;
  let fixture: ComponentFixture<AdminHeaderTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHeaderTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
