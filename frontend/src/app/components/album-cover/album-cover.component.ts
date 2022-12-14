import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-album-cover',
  templateUrl: './album-cover.component.html',
  styleUrls: ['./album-cover.component.scss']
})
export class AlbumCoverComponent implements OnInit {

  faStar = faStar;

  @Input() data: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
