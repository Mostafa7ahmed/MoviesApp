import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesIdService {

  constructor(private _HttpClient: HttpClient) { }
  
  APiKey: string = "2dc4f3b7280c70e5009487448e8c74f4"
  getMovies(TypeMovie: string, id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${TypeMovie}/${id}?api_key=${this.APiKey}`)
   
 }
}
