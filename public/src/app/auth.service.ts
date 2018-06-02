import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private authenticateUrl   = 'http://localhost:3000/';

  constructor( private http:    HttpClient,
               private router: Router) { }

  authenticateUser(user) {
    return this.http.get<any>(this.authenticateUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/authenticate']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  authenticated() {
    return !!localStorage.getItem('token');
  }
}
