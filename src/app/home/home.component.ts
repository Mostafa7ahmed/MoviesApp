import { Component, Input, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{

  constructor(private _TrendingService: TrendingService) { }
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPerson: any[] = [];
  isLoadingMovies: boolean = true;
  isLoadingTv: boolean = true;
  isLoadingPerson: boolean = true;

  imgeUrl:string="https://image.tmdb.org/t/p/w500/"


  ngOnInit(): void {
    this._TrendingService.getTrending("movie").subscribe((res) => {
      this.trendingMovies = res.results.slice(0, 10);
      this.isLoadingMovies = false;
    })
    this._TrendingService.getTrending("tv").subscribe((res) => {
      this.trendingTv = res.results.slice(0, 10);
      this.isLoadingTv = false;

    })
    this._TrendingService.getTrending("person").subscribe((res) => {
      this.trendingPerson = res.results.slice(0, 10);
      this.isLoadingPerson = false;

    })
     
   }
}
