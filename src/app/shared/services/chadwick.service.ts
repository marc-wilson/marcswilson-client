import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChadwickCounts } from '../models/chadwick-counts';

@Injectable({
  providedIn: 'root'
})
export class ChadwickService {
  private readonly _httpClient: HttpClient;
  constructor(_httpClient: HttpClient) {
    this._httpClient = _httpClient;
  }
  async getChadwickCounts(): Promise<ChadwickCounts> {
    const counts = await this._httpClient.get<ChadwickCounts>( 'http://localhost:3000/api/mlb/chadwick/counts')
      .toPromise();
    return new ChadwickCounts(counts);
  }
  async getPlayerRegions(): Promise<{ country: string, count: number}[]> {
    const data = await this._httpClient.get<{ country: string, count: number}[]>(
      'http://localhost:3000/api/mlb/chadwick/players/region'
    ).toPromise();
    return data;
  }
  async getTopHitters() {
    const data = await this._httpClient.get('http://localhost:3000/api/mlb/chadwick/players/top-hitters').toPromise();
    return data;
  }
  async getOldestFranchises() {
    const data = await this._httpClient.get( 'http://localhost:3000/api/mlb/chadwick/franchise/oldest').toPromise();
    return data;
  }
  async getTopWorldSeriesWinners() {
    const data = await this._httpClient.get('http://localhost:3000/api/mlb/chadwick/worldseries/wins').toPromise();
    return data;
  }
  async getAttendanceTrend() {
    const data = await this._httpClient.get('http://localhost:3000/api/mlb/chadwick/homegames/attendance').toPromise();
    return data;
  }
  async searchPlayers(term?: string) {
    const urlPrefix = 'http://localhost:3000/api/mlb/chadwick/players/search';
    const url = urlPrefix + (term ?  `/${term}` : '');
    const data = await this._httpClient.get(url).toPromise();
    return data;
  }
  async getPlayerComparisons(player1ID: string, player2ID: string) {
    const url = `http://localhost:3000/api/mlb/chadwick/players/compare/${player1ID}/${player2ID}`;
    const data = await this._httpClient.get(url).toPromise();
    return data;
  }
}
