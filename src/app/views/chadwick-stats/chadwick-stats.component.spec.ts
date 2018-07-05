import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChadwickStatsComponent } from './chadwick-stats.component';

describe('ChadwickStatsComponent', () => {
  let component: ChadwickStatsComponent;
  let fixture: ComponentFixture<ChadwickStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChadwickStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChadwickStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
