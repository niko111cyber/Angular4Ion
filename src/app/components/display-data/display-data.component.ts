import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],

})
export class DisplayDataComponent implements OnInit {

  name = 'Régis';
  stateButton = true;
  logoPath: string;
  message: string;
  values: string;

  constructor() {

   }

  ngOnInit() {
  }

  public showLogoAndMessage(){
    this.logoPath = '/assets/BNPP.jpg';
    this.message = 'On est la meilleure promo';
  }

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }

}
