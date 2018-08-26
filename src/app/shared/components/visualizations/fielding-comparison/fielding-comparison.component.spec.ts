import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldingComparisonComponent } from './fielding-comparison.component';

describe('FieldingComparisonComponent', () => {
  let component: FieldingComparisonComponent;
  let fixture: ComponentFixture<FieldingComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldingComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldingComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
