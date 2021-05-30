import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User, Register, Login_Response } from '../shared/auth.model';
const baseUrl = `http://technical.test.prvak.co.in/api/`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  __login(user: User) {
    return this.http.post<any>(`${baseUrl}login`, user);
  }

  __Register(register: Register) {
    console.log(register);
    return this.http.post(`${baseUrl}employeeregister`, register);
  }

  get accessKey() {
    return localStorage.getItem('accesskey');
  }
  get username() {
    return localStorage.getItem('username');
  }
  __logout() {
    return this.http
      .post(`${baseUrl}logout`, {
        username: this.username,
        authkey: this.accessKey,
      })
      .pipe(
        map((val) => {
          localStorage.clear();
        })
      );
  }
}
