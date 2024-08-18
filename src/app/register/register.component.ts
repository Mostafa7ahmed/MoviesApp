import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regsiter',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegsiterComponent {
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

  regsiterform: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.min(6),

    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.min(6)
    ]),
    phone: new FormControl(null, [
      Validators.required,
    ]),
  });

  SubmitResiter(formInfo: FormGroup) {

    this._AuthService.Resiter(formInfo.value).subscribe(
      (res) => {
        if (res.message === "success") {
          this.showToast("success", "Resiter in successfully");
          this._Router.navigate(['/login']);
        } 
      },
      (error) => {
        if (error.status === 409) {
          this.showToast("error", "User already exists");
        }
      }
    )
    
  }
}
