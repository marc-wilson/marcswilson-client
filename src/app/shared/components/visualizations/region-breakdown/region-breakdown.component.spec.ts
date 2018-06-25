import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionBreakdownComponent } from './region-breakdown.component';

describe('RegionBreakdownComponent', () => {
  let component: RegionBreakdownComponent;
  let fixture: ComponentFixture<RegionBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
