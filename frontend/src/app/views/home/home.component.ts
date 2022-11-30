import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


     fetch("http://localhost:3000/persons");

    // api.get('http://localhost:3000/persons').then(resp=>{
    //   alert(resp)
    // })
  }

  

}
