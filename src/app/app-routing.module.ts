import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegsiterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { MovieDetalisComponent } from './movie-detalis/movie-detalis.component';
import { TvDetalisComponent } from './tv-detalis/tv-detalis.component';
import { PeopleDetalisComponent } from './people-detalis/people-detalis.component';
import { PeopleComponent } from './people/people.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'people', canActivate: [AuthGuard], component: PeopleComponent },
  { path: 'search', canActivate: [AuthGuard], component: SearchComponent },

  {
    path: 'moviesDetalis/:id',
    canActivate: [AuthGuard],
    component: MovieDetalisComponent,
  },
  {
    path: 'tvDetalis/:id',
    canActivate: [AuthGuard],
    component: TvDetalisComponent,
  },
  {
    path: 'personDetalis/:id',
    canActivate: [AuthGuard],
    component: PeopleDetalisComponent,
  },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegsiterComponent },

  { path: 'tv', canActivate: [AuthGuard], component: TvComponent },
  { path: '**', canActivate: [AuthGuard], component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
