import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyActiveComponent } from './admin-company-active.component';

describe('AdminCompanyActiveComponent', () => {
  let component: AdminCompanyActiveComponent;
  let fixture: ComponentFixture<AdminCompanyActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
