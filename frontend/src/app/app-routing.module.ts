import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { FriendsComponent } from './views/friends/friends.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TimelineComponent } from './views/home/tabs/timeline/timeline.component';
import { ReviewsComponent } from './views/home/tabs/reviews/reviews.component';
import { StoriesComponent } from './views/home/tabs/stories/stories.component';

const routes: Routes = [
  { 
    path: 'home', component: HomeComponent, 
    children: [
      { path: 'timeline', component: TimelineComponent },
      { path: 'reviews', component: ReviewsComponent},
      { path: 'stories', component: StoriesComponent}
    ]
  },
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
