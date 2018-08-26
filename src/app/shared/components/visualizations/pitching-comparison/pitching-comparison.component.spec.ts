import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchingComparisonComponent } from './pitching-comparison.component';

describe('PitchingComparisonComponent', () => {
  let component: PitchingComparisonComponent;
  let fixture: ComponentFixture<PitchingComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchingComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchingComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
