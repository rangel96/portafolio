import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-online',
  templateUrl: './cv-online.component.html',
  styleUrls: ['./cv-online.component.css']
})
export class CvOnlineComponent implements OnInit {

  /* * ----- VARIABLES ----- */
  toggled = false; // responsive para el menu lateral

  constructor() { }

  ngOnInit(): void {
  }

}
