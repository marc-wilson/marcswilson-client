import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../shared/services/ui.service';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss']
})
export class AboutViewComponent implements OnInit {
  private readonly _uiService: UIService;
  constructor(_uiService: UIService) {
    this._uiService = _uiService;
  }

  ngOnInit() {
  }

}
