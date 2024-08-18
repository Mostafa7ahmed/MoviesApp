import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem("userToken") != null) {
      this.setUserData();
    }
   }
  
  DataInToken= new BehaviorSubject(null);

  setUserData(): void {
    let EncodeToken = JSON.stringify(localStorage.getItem("userToken"));
    let DecodedToken:any = jwtDecode(EncodeToken) // InterFace
    this.DataInToken.next(DecodedToken)
  }


  logOut():void {
    localStorage.removeItem("userToken");
    this.DataInToken.next(null)
    this._Router.navigate(['/login'])


  }
  login(userData: object): Observable<any>{
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signin`, userData

     )
  }


  Resiter(userData: object): Observable<any>{
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`, userData

     )
  }
}
