import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxscoresComponent } from './boxscores.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BoxscoresComponent', () => {
  let component: BoxscoresComponent;
  let fixture: ComponentFixture<BoxscoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoxscoresComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
