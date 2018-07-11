import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChadwickPlayerComparisonComponent } from './chadwick-player-comparison.component';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HomerunComparisonComponent } from '../../shared/components/visualizations/homerun-comparison/homerun-comparison.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChadwickPlayerComparisonComponent', () => {
  let component: ChadwickPlayerComparisonComponent;
  let fixture: ComponentFixture<ChadwickPlayerComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChadwickPlayerComparisonComponent,
        HomerunComparisonComponent
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        MatAutocompleteModule,
        MatInputModule
      ]
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
