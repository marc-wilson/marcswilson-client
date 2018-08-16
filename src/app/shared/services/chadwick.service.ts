import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ChadwickCounts } from '../models/chadwick-counts';
import { environment } from '../../../environments/environment';
import { ChadwickTopHitter } from '../models/chadwick-top-hitter';
import { ChadwickOldFranchise } from '../models/chadwick-old-franchise';
import { ChadwickPlayerSearchResult } from '../models/chadwick-player-search-result';
import { PlayerDetail } from '../models/player-detail';

@Injectable({
  providedIn: 'root'
})
export class ChadwickService {
  private readonly _httpClient: HttpClient;
  private readonly _environment;
  constructor(_httpClient: HttpClient) {
    this._httpClient = _httpClient;
    this._environment = environment;
  }
  async getChadwickCounts(): Promise<ChadwickCounts> {
    const counts = await this._httpClient.get<ChadwickCounts>( `${environment.api.path}/mlb/chadwick/counts`)
      .toPromise();
    return new ChadwickCounts(counts);
  }
  async getPlayerRegions(): Promise<{ country: string, count: number}[]> {
    const data = await this._httpClient.get<{ country: string, count: number}[]>(
      `${environment.api.path}/mlb/chadwick/players/region`
    ).toPromise();
    return data;
  }
  async getTopHitters(filter?: { name: string, value: string }): Promise<ChadwickTopHitter[]> {
  const opts = filter ? filter : {};
    const data = await this._httpClient.get<ChadwickTopHitter[]>(
      `${environment.api.path}/mlb/chadwick/players/top-hitters`, { params: opts }
    ).toPromise();
    return data.map( d => new ChadwickTopHitter(
      d.atBats,
      d.battingAverage,
      d.hits,
      d.homeRuns,
      d.name,
      d.playerID
    ));
  }
  async getOldestFranchises(): Promise<ChadwickOldFranchise[]> {
    const data = await this._httpClient.get<ChadwickOldFranchise[]>(
      `${environment.api.path}/mlb/chadwick/franchise/oldest`).toPromise();
    return data.map( d => new ChadwickOldFranchise(
      d.count,
      d.games,
      d.name,
      d.winPercentage,
      d.wins
    ));
  }
  async getTopWorldSeriesWinners(): Promise<{ count: number, name: string}[]> {
    const data = await this._httpClient.get<{ count: number, name: string}[]>(
      `${environment.api.path}/mlb/chadwick/worldseries/wins`
    ).toPromise();
    return data;
  }
  async getAttendanceTrend(): Promise<{ count: number, yearID: number }[]> {
    const data = await this._httpClient.get<{ count: number, yearID: number }[]>(
      `${environment.api.path}/mlb/chadwick/homegames/attendance`
    ).toPromise();
    return data;
  }
  async searchPlayers(term: string): Promise<ChadwickPlayerSearchResult[]> {
    const url = `${environment.api.path}/mlb/chadwick/players/search/${term}`;
    const data = await this._httpClient.get<ChadwickPlayerSearchResult[]>(url).toPromise();
    return data.map( d => new ChadwickPlayerSearchResult(
      d.name,
      d.playerID,
      d.teams
    ));
  }
  async getPlayerComparisons(player1ID: string, player2ID: string): Promise<PlayerDetail[]> {
    const url = `${environment.api.path}/mlb/chadwick/players/compare/${player1ID}/${player2ID}`;
    const data = await this._httpClient.get<PlayerDetail[]>(url).toPromise();
    const player1 = new PlayerDetail(
      data[0].playerID,
      data[0].birthYear,
      data[0].birthMonth,
      data[0].birthDay,
      data[0].birthCountry,
      data[0].birthState,
      data[0].birthCity,
      data[0].deathYear,
      data[0].deathMonth,
      data[0].deathDay,
      data[0].deathCountry,
      data[0].deathState,
      data[0].deathCity,
      data[0].nameFirst,
      data[0].nameLast,
      data[0].nameGiven,
      data[0].weight,
      data[0].height,
      data[0].bats,
      data[0].throws,
      data[0].debut,
      data[0].finalGame,
      data[0].retroID,
      data[0].bbrefID,
      data[0].batting,
      data[0].pitching,
      data[0].fielding,
      data[0].salaries
    );
    const player2 = new PlayerDetail(
      data[1].playerID,
      data[1].birthYear,
      data[1].birthMonth,
      data[1].birthDay,
      data[1].birthCountry,
      data[1].birthState,
      data[1].birthCity,
      data[1].deathYear,
      data[1].deathMonth,
      data[1].deathDay,
      data[1].deathCountry,
      data[1].deathState,
      data[1].deathCity,
      data[1].nameFirst,
      data[1].nameLast,
      data[1].nameGiven,
      data[1].weight,
      data[1].height,
      data[1].bats,
      data[1].throws,
      data[1].debut,
      data[1].finalGame,
      data[1].retroID,
      data[1].bbrefID,
      data[1].batting,
      data[1].pitching,
      data[1].fielding,
      data[1].salaries
    );
    return [player1, player2];
  }
}
