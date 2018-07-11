import { TestBed, inject } from '@angular/core/testing';

import { BoxscoresService } from './boxscores.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BoxscoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BoxscoresService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([BoxscoresService], (service: BoxscoresService) => {
    expect(service).toBeTruthy();
  }));
});
