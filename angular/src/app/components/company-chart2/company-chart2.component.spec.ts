import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyChart2Component } from './company-chart2.component';

describe('CompanyChart2Component', () => {
  let component: CompanyChart2Component;
  let fixture: ComponentFixture<CompanyChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
