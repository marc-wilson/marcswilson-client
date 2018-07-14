import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChadwickCounts } from '../models/chadwick-counts';
import { environment } from '../../../environments/environment';
import { ChadwickTopHitter } from '../models/chadwick-top-hitter';
import { ChadwickOldFranchise } from '../models/chadwick-old-franchise';
import { ChadwickPlayerSearchResult } from '../models/chadwick-player-search-result';

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
  async getTopHitters(): Promise<ChadwickTopHitter[]> {
    const data = await this._httpClient.get<ChadwickTopHitter[]>(
      `${environment.api.path}/mlb/chadwick/players/top-hitters`
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
  async searchPlayers(term?: string): Promise<ChadwickPlayerSearchResult[]> {
    const urlPrefix = `${environment.api.path}/mlb/chadwick/players/search`;
    const url = urlPrefix + (term ?  `/${term}` : '');
    const data = await this._httpClient.get<ChadwickPlayerSearchResult[]>(url).toPromise();
    return data.map( d => new ChadwickPlayerSearchResult(
      d.name,
      d.playerID,
      d.teams
    ));
  }
  async getPlayerComparisons(player1ID: string, player2ID: string) {
    const url = `http://localhost:3000/api/mlb/chadwick/players/compare/${player1ID}/${player2ID}`;
    const data = await this._httpClient.get(url).toPromise();
    return data;
  }
}
