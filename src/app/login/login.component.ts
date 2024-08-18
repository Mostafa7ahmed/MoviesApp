import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  

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
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),

    password: new FormControl(null, [Validators.required]),
  });

  submitLogin(formInfo: FormGroup) {
    this._AuthService.login(formInfo.value).subscribe(
      (res) => {
        if (res.message === "success") {
          localStorage.setItem("userToken", JSON.stringify(res.token));
          this._AuthService.setUserData();
          this.showToast("success", "Signed in successfully");
          this._Router.navigate(['/home']);
        } else {
          this.showToast("error", "Login failed");
        }
      },
      (error) => {
        if (error.status === 409) {
          this.showToast("error", "Conflict: User already exists");
        } else {
          this.showToast("error", "An error occurred");
        }
      }
    );
  }

}
