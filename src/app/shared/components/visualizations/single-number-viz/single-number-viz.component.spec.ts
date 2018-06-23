import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNumberVizComponent } from './single-number-viz.component';

describe('SingleNumberVizComponent', () => {
  let component: SingleNumberVizComponent;
  let fixture: ComponentFixture<SingleNumberVizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNumberVizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNumberVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
