import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  albums: Array<object> = [
    {
      title: 'Art Angels',
      artist: 'Grimes',
      image: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Grimes_-_Art_Angels.png',
      stars: [0, 1, 1, 1, 1]
    },
    {
      title: 'Post',
      artist: 'Björk',
      image: 'https://ellebrasil-wp-images.s3.amazonaws.com/2022/11/Bjork-Post.jpg',
      stars: [0, 0, 1, 1, 1]
    },
    {
      title: 'Go',
      artist: 'Grimes',
      image: 'https://i.pinimg.com/originals/67/2c/b6/672cb618bd0065e62747265f5e123063.jpg',
      stars: [0, 0, 0, 0, 1]
    }
  ]

  constructor() { }

  ngOnInit(): void {



  }

}
