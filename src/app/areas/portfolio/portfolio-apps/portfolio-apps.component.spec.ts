import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAppsComponent } from './portfolio-apps.component';

describe('PortfolioAppsComponent', () => {
  let component: PortfolioAppsComponent;
  let fixture: ComponentFixture<PortfolioAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
