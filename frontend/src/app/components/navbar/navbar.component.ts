import { Component, OnInit } from '@angular/core';
import { faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faHome = faHome;
  faUserFriends = faUserFriends;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
