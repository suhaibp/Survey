import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarCompoentComponent } from './snack-bar-compoent.component';

describe('SnackBarCompoentComponent', () => {
  let component: SnackBarCompoentComponent;
  let fixture: ComponentFixture<SnackBarCompoentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarCompoentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
