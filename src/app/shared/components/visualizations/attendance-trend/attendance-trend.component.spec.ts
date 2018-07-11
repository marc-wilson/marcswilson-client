import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceTrendComponent } from './attendance-trend.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AttendanceTrendComponent', () => {
  let component: AttendanceTrendComponent;
  let fixture: ComponentFixture<AttendanceTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttendanceTrendComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
