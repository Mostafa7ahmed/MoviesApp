import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private _HttpClient:HttpClient ) { }
  
  private readonly apiUrl = 'https://api.themoviedb.org/3/discover';
  private readonly apiKey = '2dc4f3b7280c70e5009487448e8c74f4'; // Replace with your actual API key

  getMovies(typeMovies: string, page: number = 1): Observable<any> {
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page.toString())


    return this._HttpClient.get(`${this.apiUrl}/${typeMovies}`, { params });
  }
 

  searchMovies(TextSearch:string): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${TextSearch}`)
  }
}
