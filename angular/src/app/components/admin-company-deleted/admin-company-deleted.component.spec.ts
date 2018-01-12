import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyDeletedComponent } from './admin-company-deleted.component';

describe('AdminCompanyDeletedComponent', () => {
  let component: AdminCompanyDeletedComponent;
  let fixture: ComponentFixture<AdminCompanyDeletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyDeletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
