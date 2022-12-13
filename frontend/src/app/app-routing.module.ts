import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { FriendsComponent } from './views/friends/friends.component';
import { ProfileComponent } from './views/profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'profile', component: ProfileComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { }
