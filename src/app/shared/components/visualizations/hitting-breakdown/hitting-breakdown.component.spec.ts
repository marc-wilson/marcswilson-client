import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HittingBreakdownComponent } from './hitting-breakdown.component';
import { MatCardModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HittingBreakdownComponent', () => {
  let component: HittingBreakdownComponent;
  let fixture: ComponentFixture<HittingBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HittingBreakdownComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HittingBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
