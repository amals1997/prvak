import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login_Response } from '../shared/auth.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  loginFailed: boolean = false;
  public loginResponse: Login_Response[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  getLoginError(error) {
    switch (error) {
      case 'username':
        if (this.loginForm.get('username').hasError('required')) {
          return 'UserName is required';
        }

      case 'password':
        if (this.loginForm.get('password').hasError('required')) {
          return 'Password is required';
        }

        break;
      default:
        return '';
    }
  }
  __saveLoginForm() {
    this.loading = true;
    this.authService.__login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      this.loginResponse = res.data;
      if (res.success == true) {
        this.loginResponse.forEach((element) => {
          if (element.login_username == this.loginForm.value.username) {
            localStorage.setItem('accesskey', element.auth_key);
            localStorage.setItem('username', element.login_username);
          }
        });

        this.router.navigate(['/welcome']);
      } else {
        this.loginFailed = true;
      }
    });
  }
}
