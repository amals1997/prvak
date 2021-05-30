import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  value: any;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      empid: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  getLoginError(error) {
    switch (error) {
      case 'username':
        if (this.registerForm.get('username').hasError('required')) {
          return 'UserName is required';
        }

      case 'password':
        if (this.registerForm.get('password').hasError('required')) {
          return 'Password is required';
        }
      case 'empid':
        if (this.registerForm.get('empid').hasError('required')) {
          return 'EmpId is required';
        }
      case 'name':
        if (this.registerForm.get('name').hasError('required')) {
          return 'Name is required';
        }
      case 'email':
        if (this.registerForm.get('email').hasError('required')) {
          return 'Email is required';
        }
      // if (this.registerForm.get('email').hasError('email')) {
      //   return 'Email format is incorrect';
      // }
      case 'phone':
        if (this.registerForm.get('phone').hasError('required')) {
          return 'Phone is required';
        }
      case 'designation':
        if (this.registerForm.get('designation').hasError('required')) {
          return 'Designation is required';
        }
      case 'address':
        if (this.registerForm.get('address').hasError('required')) {
          return 'Address is required';
        }

        break;
      default:
        return '';
    }
  }
  __registerForm() {
    this.authService.__Register(this.registerForm.value).subscribe((res) => {
      this.value = res;
      if (this.value.success == true) {
        this.router.navigate(['/login']);
      }
      console.log(res);
    });
  }
}
