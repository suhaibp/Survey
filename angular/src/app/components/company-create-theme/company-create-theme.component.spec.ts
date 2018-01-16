import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateThemeComponent } from './company-create-theme.component';

describe('CompanyCreateThemeComponent', () => {
  let component: CompanyCreateThemeComponent;
  let fixture: ComponentFixture<CompanyCreateThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCreateThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
