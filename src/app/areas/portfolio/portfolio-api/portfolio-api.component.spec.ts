import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioApiComponent } from './portfolio-api.component';

describe('PortfolioApiComponent', () => {
  let component: PortfolioApiComponent;
  let fixture: ComponentFixture<PortfolioApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
