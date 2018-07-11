import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestFranchisesComponent } from './oldest-franchises.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OldestFranchisesComponent', () => {
  let component: OldestFranchisesComponent;
  let fixture: ComponentFixture<OldestFranchisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OldestFranchisesComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
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
