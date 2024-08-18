import { Component, OnInit } from '@angular/core';
import { GetMoviesIdService } from '../get-movies-id.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-people-detalis',
  templateUrl: './people-detalis.component.html',
  styleUrls: ['./people-detalis.component.scss']
})
export class PeopleDetalisComponent implements OnInit {
    
  constructor(private _GetMoviesIdService: GetMoviesIdService, private _ActivatedRoute: ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.params["id"];
  }
  id: string = "";
  peopledetails: any = {};
  isLoading: boolean = true;
  imgDetalise: string = "https://image.tmdb.org/t/p/w500/";

  ngOnInit(): void {
    this._GetMoviesIdService.getMovies("person", this.id).subscribe((res) => {
      this.peopledetails = res;
      this.isLoading = false;
    })
  }
}
