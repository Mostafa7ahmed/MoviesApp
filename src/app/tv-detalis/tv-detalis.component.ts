import { Component, OnInit } from '@angular/core';
import { GetMoviesIdService } from '../get-movies-id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-detalis',
  templateUrl: './tv-detalis.component.html',
  styleUrls: ['./tv-detalis.component.scss']
})
export class TvDetalisComponent implements OnInit {
  products: any[] = [];
  responsiveOptions: any[] = [];
  id: string = "";
  Tvdetails: any = {};
  imgDetalise: string = "https://image.tmdb.org/t/p/original/";
  isloading: boolean = true;

  backgroundImageUrl:string =""
  constructor(
    private _GetMoviesIdService: GetMoviesIdService, 
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params["id"];
    
    this._GetMoviesIdService.getMovies("tv", this.id).subscribe((res) => {
      this.Tvdetails = res;
      this.backgroundImageUrl = this.imgDetalise + res.backdrop_path;
      this.products = this.extractProductsFromTvDetails(this.Tvdetails);
      this.isloading = false;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  extractProductsFromTvDetails(tvDetails: any): any[] {
    return tvDetails.seasons || []; 
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Low Stock':
        return 'warning';
      case 'Out of Stock':
        return 'danger';
      default:
        return 'info';
    }
  }
}
