import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music';

}

const url = 'http://localhost:4200/agenda';

export const fetchPost  = () => axios.get(url);
export const createPost = (newPost: any) => axios.post(url, newPost);

