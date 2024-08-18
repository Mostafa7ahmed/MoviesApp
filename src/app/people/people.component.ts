import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {


  people: any[] = [];
  imgeUrl: string = "https://image.tmdb.org/t/p/w500/";
  currentPage: number = 1;
  totalPages: number = 1;
  loader:boolean =true
  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadFilms(this.currentPage);
  }

  loadFilms(page: number): void {
    this._moviesService.getMovies("person", page).subscribe(data => {
      this.people = data.results;
      this.totalPages = data.total_pages;
      this.currentPage = page;
      this.loader = false;
      window.scrollTo(0, 0);  

    });
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.loadFilms(page);
    }
   
  }}
