import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { FriendsComponent } from './views/friends/friends.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimelineComponent } from './views/home/tabs/timeline/timeline.component';
import { ReviewsComponent } from './views/home/tabs/reviews/reviews.component';
import { StoriesComponent } from './views/home/tabs/stories/stories.component';
import { AlbumCoverComponent } from './components/album-cover/album-cover.component';

const routes: Routes = [
  { path: 'agenda', component: AgendaComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'agenda', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgendaComponent,
    FriendsComponent,
    ProfileComponent,
    NavbarComponent,
    TimelineComponent,
    ReviewsComponent,
    StoriesComponent,
    AlbumCoverComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

