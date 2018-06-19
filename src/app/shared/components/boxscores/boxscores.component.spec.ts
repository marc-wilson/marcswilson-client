import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxscoresComponent } from './boxscores.component';

describe('BoxscoresComponent', () => {
  let component: BoxscoresComponent;
  let fixture: ComponentFixture<BoxscoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxscoresComponent ]
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
