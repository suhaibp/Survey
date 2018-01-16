import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditThemeContainerComponent } from './company-edit-theme-container.component';

describe('CompanyEditThemeContainerComponent', () => {
  let component: CompanyEditThemeContainerComponent;
  let fixture: ComponentFixture<CompanyEditThemeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEditThemeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditThemeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
