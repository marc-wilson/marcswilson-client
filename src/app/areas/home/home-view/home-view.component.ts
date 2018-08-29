import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { UIService } from '../../../shared/services/ui.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit, OnDestroy {
  public readonly faBriefcase: IconDefinition;
  public readonly faUserTie: IconDefinition;
  public readonly faEnvelope: IconDefinition;
  public readonly faGithub: IconDefinition;
  public readonly faStackOverflow: IconDefinition;
  public readonly faLinkedIn: IconDefinition;
  public readonly faFacebookF: IconDefinition;
  public readonly faTwitter: IconDefinition;
  private readonly _matBottomSheet: MatBottomSheet;
  private readonly _uiSerivce: UIService;
  constructor(_matBottomSheet: MatBottomSheet, _uiService: UIService) {
    this.faBriefcase = faBriefcase;
    this.faUserTie = faUserTie;
    this.faEnvelope = faEnvelope;
    this.faGithub = faGithub;
    this.faStackOverflow = faStackOverflow;
    this.faLinkedIn = faLinkedinIn;
    this.faFacebookF = faFacebookF;
    this.faTwitter = faTwitter;
    this._matBottomSheet = _matBottomSheet;
    this._uiSerivce = _uiService;
  }

  ngOnInit() {
    this._uiSerivce.toggleTopNav();
  }
  openContactForm(): void {
    this._matBottomSheet.open(ContactFormComponent);
  }
  ngOnDestroy(): void {
    this._uiSerivce.toggleTopNav();
  }
}
