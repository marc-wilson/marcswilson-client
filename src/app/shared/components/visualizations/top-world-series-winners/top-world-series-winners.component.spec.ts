import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWorldSeriesWinnersComponent } from './top-world-series-winners.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TopWorldSeriesWinnersComponent', () => {
  let component: TopWorldSeriesWinnersComponent;
  let fixture: ComponentFixture<TopWorldSeriesWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopWorldSeriesWinnersComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
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
