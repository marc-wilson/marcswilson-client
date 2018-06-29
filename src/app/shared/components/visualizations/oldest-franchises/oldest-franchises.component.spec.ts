import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestFranchisesComponent } from './oldest-franchises.component';

describe('OldestFranchisesComponent', () => {
  let component: OldestFranchisesComponent;
  let fixture: ComponentFixture<OldestFranchisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldestFranchisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldestFranchisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
