import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moviesApp';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Scrolls to the top of the page
      }
    });
  }
  // constructor(private _AuthService: AuthService) {
  //   this._AuthService.userData.subscribe(() => {
  //     if (this._AuthService.userData.getValue() != null) {
  //       setTimeout(() => {
  //         this._AuthService.logOut();
  //      }, 70000)
  //     }
  //   });
  
  // }
}
