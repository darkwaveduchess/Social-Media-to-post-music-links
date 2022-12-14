import { Component, OnInit } from '@angular/core';
import { faStar, faLink, faImage, faLocationArrow, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  faStar = faStar;
  faLink = faLink;
  faImage = faImage;
  faLocationArrow = faLocationArrow;
  faGlobeAsia = faGlobeAsia;

  constructor() { }

  ngOnInit(): void {
  }

  

}




