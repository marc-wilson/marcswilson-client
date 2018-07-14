import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { ChadwickService } from './chadwick.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { ChadwickCounts } from '../models/chadwick-counts';
import { ChadwickTopHitter } from '../models/chadwick-top-hitter';
import { ChadwickOldFranchise } from '../models/chadwick-old-franchise';
import { ChadwickPlayerSearchResult } from '../models/chadwick-player-search-result';

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
  it('should get oldest franchises', inject([ChadwickService], (service: ChadwickService) => {
    const response = [
      new ChadwickOldFranchise(1, 1, 'Franchise 1', 1, 1),
      new ChadwickOldFranchise(2, 2, 'Franchise 2', 2, 2),
      new ChadwickOldFranchise(3, 3, 'Franchise 3', 3, 3)
    ];
    service.getOldestFranchises().then( _franchises => {
      expect(_franchises).toBeTruthy();
      expect(_franchises.length).toEqual(3);
      expect(_franchises[0].count).toEqual(1);
      expect(_franchises[0].games).toEqual(1);
      expect(_franchises[0].name).toEqual('Franchise 1');
      expect(_franchises[0].winPercentage).toEqual(1);
      expect(_franchises[0].wins).toEqual(1);
      expect(_franchises[1].count).toEqual(2);
      expect(_franchises[1].games).toEqual(2);
      expect(_franchises[1].name).toEqual('Franchise 2');
      expect(_franchises[1].winPercentage).toEqual(2);
      expect(_franchises[1].wins).toEqual(2);
      expect(_franchises[2].count).toEqual(3);
      expect(_franchises[2].games).toEqual(3);
      expect(_franchises[2].name).toEqual('Franchise 3');
      expect(_franchises[2].winPercentage).toEqual(3);
      expect(_franchises[2].wins).toEqual(3);
    });
    const req = httpMock.expectOne(`${environment.api.path}/mlb/chadwick/franchise/oldest`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  }));
  it('should get top world series winners', inject([ChadwickService], (service: ChadwickService) => {
    const response = [
      { count: 1, name: 'Team 1' },
      { count: 2, name: 'Team 2' },
      { count: 3, name: 'Team 3' }
    ];
    service.getTopWorldSeriesWinners().then( _winners => {
      expect(_winners).toBeTruthy();
      expect(_winners.length).toEqual(3);
      expect(_winners[0].count).toEqual(1);
      expect(_winners[0].name).toEqual('Team 1');
      expect(_winners[1].count).toEqual(2);
      expect(_winners[1].name).toEqual('Team 2');
      expect(_winners[2].count).toEqual(3);
      expect(_winners[2].name).toEqual('Team 3');
    });
    const req = httpMock.expectOne(`${environment.api.path}/mlb/chadwick/worldseries/wins`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  }));
  it('should get attendance trend', inject([ChadwickService], (service: ChadwickService) => {
    const response = [
      { count: 1, yearID: 1 },
      { count: 2, yearID: 2 },
      { count: 3, yearID: 3 },
    ];
    service.getAttendanceTrend().then( _attendance => {
      expect(_attendance).toBeTruthy();
      expect(_attendance.length).toEqual(3);
      expect(_attendance[0].count).toEqual(1);
      expect(_attendance[0].yearID).toEqual(1);
      expect(_attendance[1].count).toEqual(2);
      expect(_attendance[1].yearID).toEqual(2);
    });
    const req = httpMock.expectOne(`${environment.api.path}/mlb/chadwick/homegames/attendance`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  }));
  it('should fetch player results', inject([ChadwickService], (service: ChadwickService) => {
    const response = [
      new ChadwickPlayerSearchResult('Player 1', 'player1', ['Team 1']),
      new ChadwickPlayerSearchResult('Player 2', 'player2', ['Team 2']),
      new ChadwickPlayerSearchResult('Player 3', 'player3', ['Team 3'])
    ];
    service.searchPlayers('player').then( _results => {
      expect(_results).toBeTruthy();
      expect(_results.length).toEqual(3);
      expect(_results[0].name).toEqual('Player 1');
      expect(_results[0].playerID).toEqual('player1');
      expect(_results[0].teams.length).toEqual(1);
      expect(_results[1].name).toEqual('Player 2');
      expect(_results[1].playerID).toEqual('player2');
      expect(_results[1].teams.length).toEqual(1);
      expect(_results[2].name).toEqual('Player 3');
      expect(_results[2].playerID).toEqual('player3');
      expect(_results[2].teams.length).toEqual(1);
    });
    const req = httpMock.expectOne(`${environment.api.path}/mlb/chadwick/players/search/player`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  }));
});
