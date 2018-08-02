import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  private readonly _bottomSheetRef: MatBottomSheetRef<ContactFormComponent>;
  constructor(_bottomSheetRef: MatBottomSheetRef<ContactFormComponent>) {
    this._bottomSheetRef = _bottomSheetRef;
  }

  ngOnInit() {
  }

}
