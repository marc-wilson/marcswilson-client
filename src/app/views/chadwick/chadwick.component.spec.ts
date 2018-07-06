import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChadwickComponent } from './chadwick.component';

describe('ChadwickComponent', () => {
  let component: ChadwickComponent;
  let fixture: ComponentFixture<ChadwickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChadwickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChadwickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
