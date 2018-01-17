import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyManageThemesComponent } from './company-manage-themes.component';

describe('CompanyManageThemesComponent', () => {
  let component: CompanyManageThemesComponent;
  let fixture: ComponentFixture<CompanyManageThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyManageThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyManageThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
