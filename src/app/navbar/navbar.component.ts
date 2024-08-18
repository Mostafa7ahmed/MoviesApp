import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService: AuthService) {}
  iSlogin: boolean = false;

  callLogOut() {
    this.showToast("success", "logOut in successfully");
    this._AuthService.logOut()
  }
  private showToast(icon: 'success' | 'error', title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({ icon, title });
  }

  ngOnInit(): void {
   
    this._AuthService.DataInToken.subscribe(() => {
      if (this._AuthService.DataInToken.getValue() != null) {
        this.iSlogin = true;
      }
      else {
        this.iSlogin = false;

      }

    })
  }
}
