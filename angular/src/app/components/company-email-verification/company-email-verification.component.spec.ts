import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEmailVerificationComponent } from './company-email-verification.component';

describe('CompanyEmailVerificationComponent', () => {
  let component: CompanyEmailVerificationComponent;
  let fixture: ComponentFixture<CompanyEmailVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEmailVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEmailVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
