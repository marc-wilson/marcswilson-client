import { TestBed, inject } from '@angular/core/testing';

import { GeoService } from './geo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GeoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GeoService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([GeoService], (service: GeoService) => {
    expect(service).toBeTruthy();
  }));
});
