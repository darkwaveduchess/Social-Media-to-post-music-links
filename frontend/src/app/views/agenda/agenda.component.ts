import { Component, OnInit } from '@angular/core';
import { faStar, faLink, faImage, faLocationArrow, faGlobeAsia, faHeart, faSave, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  Api = new ApiService();
  postContent: string = '';

  faStar = faStar;
  faLink = faLink;
  faImage = faImage;
  faLocationArrow = faLocationArrow;
  faGlobeAsia = faGlobeAsia;
  faHeart = faHeart;
  faSave = faSave;
  faComment = faComment;
  faShare = faShare;

  albums: Array<object> = [
    {
      title: 'Post',
      artist: 'Björk',
      image: 'https://ellebrasil-wp-images.s3.amazonaws.com/2022/11/Bjork-Post.jpg',
      stars: [0, 0, 1, 1, 1],
      review: ''
    }
  ]

  reviews: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.Api.get('review').then(data => {
      this.reviews = data
    });
  }

  post(){
    this.Api.post('review', {
      Content: this.postContent
    }).then(data => {
      this.postContent = ''
      this.getPosts();
    });

    return false
  }


}