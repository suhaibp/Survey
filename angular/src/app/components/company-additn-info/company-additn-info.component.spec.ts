import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdditnInfoComponent } from './company-additn-info.component';

describe('CompanyAdditnInfoComponent', () => {
  let component: CompanyAdditnInfoComponent;
  let fixture: ComponentFixture<CompanyAdditnInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAdditnInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdditnInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
