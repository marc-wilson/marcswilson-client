import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { ChadwickService } from './chadwick.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { ChadwickCounts } from '../models/chadwick-counts';
import { ChadwickTopHitter } from '../models/chadwick-top-hitter';

describe('ChadwickService', () => {
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChadwickService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should be created', inject([ChadwickService], (service: ChadwickService) => {
    expect(service).toBeTruthy();
  }));
  it('should get chadwick counts', inject([ChadwickService], (service: ChadwickService) => {
    const response = new ChadwickCounts({
      teams: 1,
      ballparks: 2,
      attendance: 3,
      people: 4
    });
    service.getChadwickCounts().then( _counts => {
      expect(_counts).toBeTruthy();
      expect(_counts.teams).toEqual(1);
      expect(_counts.ballparks).toEqual(2);
      expect(_counts.attendance).toEqual(3);
      expect(_counts.people).toEqual(4);
    });
    const req = httpMock.expectOne(`${environment.api.path}/mlb/chadwick/counts`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  }));
  it ('should get player regions', inject( [ChadwickService], (service: ChadwickService) => {
    const response = [
      { country: 'USA', count: 500 },
      { country: 'Mexico', count: 400 },
      { country: 'D.R.', count: 300 }
    ];
    service.getPlayerRegions().then( _regions => {
      expect(_regions.length).toEqual(3);
      expect(_regions[0].country).toEqual('USA');
      expect(_regions[0].count).toEqual(500);
      expect(_regions[1].country).toEqual('Mexico');
      expect(_regions[1].count).toEqual(400);
      expect(_regions[2].country).toEqual('D.R.');
      expect(_regions[2].count).toEqual(300);
    });
    const req = httpMock.expectOne(`${environment.api.path}/mlb/chadwick/players/region`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  }));
  it('should get top hitters', inject([ChadwickService], (service: ChadwickService) => {
    const response = [
      new ChadwickTopHitter( 1, 0.1, 1, 1, 'Player 1', 'One'),
      new ChadwickTopHitter( 2, 0.2, 2, 2, 'Player 2', 'Two'),
      new ChadwickTopHitter( 3, 0.3, 3, 3, 'Player 3', 'Three'),
    ];
    service.getTopHitters().then( _hitters => {
      expect(_hitters).toBeTruthy();
      expect(_hitters.length).toEqual(response.length);
      expect(_hitters[0].atBats).toEqual(response[0].atBats);
      expect(_hitters[0].battingAverage).toEqual(response[0].battingAverage);
      expect(_hitters[0].hits).toEqual(response[0].hits);
      expect(_hitters[0].homeRuns).toEqual(response[0].homeRuns);
      expect(_hitters[0].name).toEqual(response[0].name);
      expect(_hitters[0].playerID).toEqual(response[0].playerID);
      expect(_hitters[1].atBats).toEqual(response[1].atBats);
      expect(_hitters[1].battingAverage).toEqual(response[1].battingAverage);
      expect(_hitters[1].hits).toEqual(response[1].hits);
      expect(_hitters[1].homeRuns).toEqual(response[1].homeRuns);
      expect(_hitters[1].name).toEqual(response[1].name);
      expect(_hitters[1].playerID).toEqual(response[1].playerID);
      expect(_hitters[2].atBats).toEqual(response[2].atBats);
      expect(_hitters[2].battingAverage).toEqual(response[2].battingAverage);
      expect(_hitters[2].hits).toEqual(response[2].hits);
      expect(_hitters[2].homeRuns).toEqual(response[2].homeRuns);
      expect(_hitters[2].name).toEqual(response[2].name);
      expect(_hitters[2].playerID).toEqual(response[2].playerID);
    });
    const req = httpMock.expectOne(`${environment.api.path}/mlb/chadwick/players/top-hitters`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  }));
});
