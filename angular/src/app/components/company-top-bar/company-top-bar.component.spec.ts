import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTopBarComponent } from './company-top-bar.component';

describe('CompanyTopBarComponent', () => {
  let component: CompanyTopBarComponent;
  let fixture: ComponentFixture<CompanyTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
