import { TestBed, inject } from '@angular/core/testing';

import { ChadwickService } from './chadwick.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChadwickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChadwickService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([ChadwickService], (service: ChadwickService) => {
    expect(service).toBeTruthy();
  }));
  // it ('should get player region counts', inject( [ChadwickService], (service: ChadwickService) => {
  //
  // }));
});
