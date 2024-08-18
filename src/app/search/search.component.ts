import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchForm: FormGroup  = new FormGroup({
    searchQuery: new FormControl('') 
  });; 
  
  searchResults: any[] = [];
  imgeUrl : string = "https://image.tmdb.org/t/p/w500/";
  constructor(private _MoviesService :MoviesService){}
  isLoading: boolean = false;
  searchAttempted: boolean = false; // Track whether a search has been performed

  searchMovies(): void {
    this.isLoading = true; 
    this.searchAttempted = true; // Mark that a search has been attempted

    const query = this.searchForm.get('searchQuery')?.value;
    this._MoviesService.searchMovies(query).subscribe(
      (response) => {
        this.searchResults = response.results || [];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching search results:', error);
        this.searchResults = [];
        this.isLoading = false;
      }
      
    );
  }
 

}
