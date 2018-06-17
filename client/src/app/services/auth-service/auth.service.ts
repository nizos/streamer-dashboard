/*
 * @Author: Nizars
 * @Date: 2018-06-09 05:13:20
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-09 07:00:37
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private authUrl = 'http://localhost:3000/auth/twitch';
  constructor(private http: HttpClient, private router: Router) { }

  signIn(user) {
    return this.http.get<any>(this.authUrl, user);
  }

  signedIn() {
    return !!localStorage.getItem('token');
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
