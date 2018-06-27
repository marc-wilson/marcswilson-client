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
  async getPlayerRegions() {
    const data = await this._httpClient.get('http://localhost:3000/api/mlb/chadwick/players/region').toPromise();
    return data;
  }
  async getTopHitters() {
    const data = await this._httpClient.get('http://localhost:3000/api/mlb/chadwick/players/top-hitters').toPromise();
    return data;
  }
}
