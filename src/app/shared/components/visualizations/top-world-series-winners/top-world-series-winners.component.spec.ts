import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWorldSeriesWinnersComponent } from './top-world-series-winners.component';

describe('TopWorldSeriesWinnersComponent', () => {
  let component: TopWorldSeriesWinnersComponent;
  let fixture: ComponentFixture<TopWorldSeriesWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopWorldSeriesWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWorldSeriesWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
