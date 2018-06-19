import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boxscores } from '../shared/models/boxscores';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoxscoresService {
  private _httpClient: HttpClient;
  constructor(_httpClient: HttpClient) {
    this._httpClient = _httpClient;
  }
  async getCurrentBoxscores(): Promise<Boxscores> {
    const boxscores = await this._httpClient.get<Boxscores>(`${environment.api.path}/mlb/boxscores`).toPromise();
    return new Boxscores(boxscores);
  }
}
