import { TestBed, inject } from '@angular/core/testing';

import { BoxscoresService } from './boxscores.service';

describe('BoxscoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoxscoresService]
    });
  });

  it('should be created', inject([BoxscoresService], (service: BoxscoresService) => {
    expect(service).toBeTruthy();
  }));
});
