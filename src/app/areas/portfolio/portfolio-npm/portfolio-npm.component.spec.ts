import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNpmComponent } from './portfolio-npm.component';

describe('PortfolioNpmComponent', () => {
  let component: PortfolioNpmComponent;
  let fixture: ComponentFixture<PortfolioNpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioNpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
