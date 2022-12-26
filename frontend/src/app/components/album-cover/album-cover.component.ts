import { Component, Input, OnInit } from '@angular/core';
import { faStar, faHome, faUserFriends, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-album-cover',
  templateUrl: './album-cover.component.html',
  styleUrls: ['./album-cover.component.scss']
})
export class AlbumCoverComponent implements OnInit {

  faStar = faStar;


  @Input() data: any; 
  @Input() type: string = '';

  width: number = 210;

  constructor() {
  }
  
  ngOnInit(): void {
    if(this.type == 'review')
      this.width = 140;

      if(this.type == 'post')
      this.width = 140;
  }

}
