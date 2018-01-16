import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateThemeContainerComponent } from './company-create-theme-container.component';

describe('CompanyCreateThemeContainerComponent', () => {
  let component: CompanyCreateThemeContainerComponent;
  let fixture: ComponentFixture<CompanyCreateThemeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCreateThemeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateThemeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
