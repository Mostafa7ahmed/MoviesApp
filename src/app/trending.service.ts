import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  private readonly trendingUrl = 'https://api.themoviedb.org/3/trending';
  private readonly apiKey = '2dc4f3b7280c70e5009487448e8c74f4'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  getTrending(typeTrending: string): Observable<any> {
    return this.http.get<any>(`${this.trendingUrl}/${typeTrending}/day`, {
      params: new HttpParams().set('api_key', this.apiKey)
    });
  }

}
