import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tipoConsultas:any = [];

  constructor() { }

  ngOnInit(): void {

    fetch("http://localhost:3000/persons")
    .then((response) => response.json())
    .then((data) => this.tipoConsultas = data);


  }

}
