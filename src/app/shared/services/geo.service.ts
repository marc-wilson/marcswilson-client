import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private readonly _httpClient: HttpClient;
  constructor(_httpClient: HttpClient) {
    this._httpClient = _httpClient;
  }
  async getUSTopoJson(): Promise<any> {
    const topo = await this._httpClient.get(`${environment.api.path}/geo`).toPromise();
    return topo;
  }
}
