import { Component, OnInit } from '@angular/core';


import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

  

}




