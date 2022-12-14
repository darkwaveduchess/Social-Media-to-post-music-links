import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  albums: Array<object> = [
    {
      title: 'Pang',
      artist: 'Caroline Polachek',
      image: 'http://musicainstantanea.com.br/wp-content/uploads/2019/10/Caroline-Polachek-Pang.jpg',
      stars: [0, 1, 1, 1, 1],
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at sodales diam. Quisque ultricies urna lorem, gravida'
    },
    {
      title: 'Fossora',
      artist: 'Björk',
      image: 'http://musicainstantanea.com.br/wp-content/uploads/2022/09/Bjo%CC%88rk-Fossora-700x700.jpg',
      stars: [0, 0, 1, 1, 1],
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at sodales diam. Quisque ultricies urna lorem, gravida fringilla lectus varius vitae. Fusce ac nunc eget lorem efficitur eleifend non at justo. Curabitur blandit, ipsum at mollis viverra, mauris elit consectetur erat, a ornare risus tellus pellentesque lorem. Suspendisse orci ipsum, tincidunt sed sapien sit amet, convallis dapibus mauris. Morbi id urna sed tortor blandit pulvinar. Morbi molestie, augue lobortis cursus aliquam, neque enim vehicula nunc, sed tincidunt arcu mauris eget nulla. Donec eu nisi id est vehicula mattis at a elit. Maecenas sollicitudin ultrices leo, in porttitor est aliquet eu.'
    },
    {
      title: 'How to Fight',
      artist: 'Eartheater',
      image: 'https://cdns-images.dzcdn.net/images/cover/c9fe68b58a78c579b6432068f91c5e60/264x264.jpg',
      stars: [1, 1, 1, 1, 1],
      review: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Irisiri',
      artist: 'Eartheater',
      image: 'https://static.fnac-static.com/multimedia/Images/FR/NR/04/0a/dc/14420484/1507-1/tsp20220531104156/Irisiri.jpg',
      stars: [1, 1, 1, 1, 1],
      review: ''
    },
    {
      title: 'Post',
      artist: 'Björk',
      image: 'https://ellebrasil-wp-images.s3.amazonaws.com/2022/11/Bjork-Post.jpg',
      stars: [0, 0, 1, 1, 1],
      review: 'Suspendisse orci ipsum, tincidunt sed sapien sit amet, convallis dapibus mauris. Morbi id urna sed tortor blandit pulvinar. Morbi molestie, augue lobortis cursus aliquam, neque enim vehicula nunc, sed tincidunt arcu mauris eget nulla. Donec eu nisi id est vehicula mattis at a elit. '
    }
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
