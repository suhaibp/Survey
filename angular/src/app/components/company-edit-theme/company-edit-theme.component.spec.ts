import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditThemeComponent } from './company-edit-theme.component';

describe('CompanyEditThemeComponent', () => {
  let component: CompanyEditThemeComponent;
  let fixture: ComponentFixture<CompanyEditThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEditThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
