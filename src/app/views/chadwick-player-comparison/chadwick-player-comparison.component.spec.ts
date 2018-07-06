import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChadwickPlayerComparisonComponent } from './chadwick-player-comparison.component';

describe('ChadwickPlayerComparisonComponent', () => {
  let component: ChadwickPlayerComparisonComponent;
  let fixture: ComponentFixture<ChadwickPlayerComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChadwickPlayerComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChadwickPlayerComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
