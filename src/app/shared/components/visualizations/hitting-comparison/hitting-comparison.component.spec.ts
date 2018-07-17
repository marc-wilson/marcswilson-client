import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HittingComparisonComponent } from './hitting-comparison.component';

describe('HittingComparisonComponent', () => {
  let component: HittingComparisonComponent;
  let fixture: ComponentFixture<HittingComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HittingComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HittingComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
