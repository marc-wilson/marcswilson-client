import { Component, OnInit } from '@angular/core';
import { NpmService } from '../../../shared/services/npm.service';
import { NpmPackage } from '../../../shared/models/npm-package';

@Component({
  selector: 'app-portfolio-npm',
  templateUrl: './portfolio-npm.component.html',
  styleUrls: ['./portfolio-npm.component.scss']
})
export class PortfolioNpmComponent implements OnInit {
  private readonly _npmService: NpmService;
  public packages: NpmPackage[];
  constructor(_npm: NpmService) {
    this._npmService = _npm;
  }

  async ngOnInit() {
    const pkg = await this._npmService.getPackage('chadwick-to-mongo');
    this.packages = [pkg];
  }

}
