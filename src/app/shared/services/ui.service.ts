import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  public readonly navEmitter: EventEmitter<boolean>;
  private _navState: boolean;
  constructor() {
    this._navState = true;
    this.navEmitter = new EventEmitter<boolean>(this._navState);
  }
  toggleTopNav(): void {
    this._navState = !this._navState;
    this.navEmitter.emit(this._navState);
  }
}
