import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExpiredPageComponent } from './company-expired-page.component';

describe('CompanyExpiredPageComponent', () => {
  let component: CompanyExpiredPageComponent;
  let fixture: ComponentFixture<CompanyExpiredPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyExpiredPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExpiredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
