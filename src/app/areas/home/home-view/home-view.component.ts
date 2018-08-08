import { Component, OnInit } from '@angular/core';
import {
  faGithub,
  faStackOverflow,
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faUserTie, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet } from '@angular/material';
import { ContactFormComponent } from '../../../shared/dialogs/contact-form/contact-form.component';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  public readonly faBriefcase: IconDefinition;
  public readonly faUserTie: IconDefinition;
  public readonly faEnvelope: IconDefinition;
  public readonly faGithub: IconDefinition;
  public readonly faStackOverflow: IconDefinition;
  public readonly faLinkedIn: IconDefinition;
  public readonly faFacebookF: IconDefinition;
  public readonly faTwitter: IconDefinition;
  private readonly _matBottomSheet: MatBottomSheet;
  constructor(_matBottomSheet: MatBottomSheet) {
    this.faBriefcase = faBriefcase;
    this.faUserTie = faUserTie;
    this.faEnvelope = faEnvelope;
    this.faGithub = faGithub;
    this.faStackOverflow = faStackOverflow;
    this.faLinkedIn = faLinkedinIn;
    this.faFacebookF = faFacebookF;
    this.faTwitter = faTwitter;
    this._matBottomSheet = _matBottomSheet;
  }

  ngOnInit() {
  }
  openContactForm(): void {
    this._matBottomSheet.open(ContactFormComponent);
  }
}
