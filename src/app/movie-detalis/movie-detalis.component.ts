import { Component, OnInit } from '@angular/core';
import { GetMoviesIdService } from '../get-movies-id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detalis',
  templateUrl: './movie-detalis.component.html',
  styleUrls: ['./movie-detalis.component.scss']
})
export class MovieDetalisComponent implements OnInit {
  constructor(private _GetMoviesIdService: GetMoviesIdService, private _ActivatedRoute: ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.params["id"];
  }
  id: string = "";
  isloading: boolean = true;
  moviesdetails: any = {};
  backgroundImageUrl:string =""
  imgDetalise: string = "https://image.tmdb.org/t/p/w500/";
   ngOnInit(): void {
     this._GetMoviesIdService.getMovies("movie", this.id).subscribe((res) => {
       this.moviesdetails = res;
       this.isloading = false;
       this.backgroundImageUrl = this.imgDetalise + res.backdrop_path;
      })
   }
}
