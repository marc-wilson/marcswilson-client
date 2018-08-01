import { Component, OnInit } from '@angular/core';
import { faGithub, faStackOverflow, faLinkedinIn, IconDefinition } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  public readonly faGithub: IconDefinition;
  public readonly faStackOverflow: IconDefinition;
  public readonly faLinkedIn: IconDefinition;
  constructor() {
    this.faGithub = faGithub;
    this.faStackOverflow = faStackOverflow;
    this.faLinkedIn = faLinkedinIn;
  }

  ngOnInit() {
  }

}
