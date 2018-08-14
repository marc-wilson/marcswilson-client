import { TestBed, inject } from '@angular/core/testing';

import { NpmService } from './npm.service';

describe('NpmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NpmService]
    });
  });

  it('should be created', inject([NpmService], (service: NpmService) => {
    expect(service).toBeTruthy();
  }));
});
