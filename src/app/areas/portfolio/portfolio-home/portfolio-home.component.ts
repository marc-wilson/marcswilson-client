import { Component, OnInit } from '@angular/core';
import { faCode, faMagic, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faNpm } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit {
  public readonly faCode: IconDefinition;
  public readonly faMagic: IconDefinition;
  public readonly faNpm: IconDefinition;
  constructor() {
    this.faCode = faCode;
    this.faMagic = faMagic;
    this.faNpm = faNpm;
  }

  ngOnInit() {
  }

}
