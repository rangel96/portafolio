import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  // * ----- VALORES ----- //
  date: Date = new Date();
  year: number = new Date().getFullYear();

  constructor() { }

}
