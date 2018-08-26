import { Component, OnInit } from '@angular/core';
import {
  faBaseballBall,
  faUserFriends,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chadwick',
  templateUrl: './chadwick.component.html',
  styleUrls: ['./chadwick.component.scss']
})
export class ChadwickComponent implements OnInit {
  public readonly faBaseballBall: IconDefinition;
  public readonly faUserFriends: IconDefinition;
  public sideNavState = false;
  constructor() {
    this.faBaseballBall = faBaseballBall;
    this.faUserFriends = faUserFriends;
  }

  ngOnInit() {
  }
  toggleNav(): void {
    this.sideNavState = !this.sideNavState;
  }
}
