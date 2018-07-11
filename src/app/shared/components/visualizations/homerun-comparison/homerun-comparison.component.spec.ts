import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerunComparisonComponent } from './homerun-comparison.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomerunComparisonComponent', () => {
  let component: HomerunComparisonComponent;
  let fixture: ComponentFixture<HomerunComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomerunComparisonComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerunComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
