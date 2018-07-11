import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChadwickComponent } from './chadwick.component';
import { MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChadwickComponent', () => {
  let component: ChadwickComponent;
  let fixture: ComponentFixture<ChadwickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChadwickComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule
      ]
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
