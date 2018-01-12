import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpieComponent } from './newpie.component';

describe('NewpieComponent', () => {
  let component: NewpieComponent;
  let fixture: ComponentFixture<NewpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
