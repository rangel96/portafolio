import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /* * ----- VARIABLES ----- */
  toggled = false; // responsive para el menu lateral

  constructor() { }

  ngOnInit(): void {
  }

}
