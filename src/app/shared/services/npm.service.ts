import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NpmPackage } from '../models/npm-package';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NpmService {
  private readonly _httpClient: HttpClient;
  constructor(_httpClient: HttpClient) {
    this._httpClient = _httpClient;
  }
  async getPackage(packageName: string): Promise<NpmPackage> {
    const response = await this._httpClient.get(`${environment.api.path}/npm/${packageName}`).toPromise();
    return new NpmPackage(response);
  }
}
