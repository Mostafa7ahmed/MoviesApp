import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegsiterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CarouselModule as PrimeNgCarouselModule } from 'primeng/carousel';
import { CarouselModule as NgxOwlCarouselOModule } from 'ngx-owl-carousel-o';

import { TvComponent } from './tv/tv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetalisComponent } from './movie-detalis/movie-detalis.component';
import { TvDetalisComponent } from './tv-detalis/tv-detalis.component';
import { PeopleDetalisComponent } from './people-detalis/people-detalis.component';
import { ButtonModule } from 'primeng/button';
import { PeopleComponent } from './people/people.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    NavbarComponent,
    LoginComponent,
    RegsiterComponent,
    NotfoundComponent,
    TvComponent,
    MovieDetalisComponent,
    TvDetalisComponent,
    PeopleDetalisComponent,
    PeopleComponent,
    SearchComponent,
    HeaderComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimeNgCarouselModule,
    NgxOwlCarouselOModule ,
    ButtonModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
