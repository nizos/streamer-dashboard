/*
 * @Author: Nizars
 * @Date: 2018-06-09 05:13:20
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-09 07:00:37
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MzToastService } from 'ngx-materialize';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {

  private authUrl = 'http://localhost:3000/auth/twitch';
  constructor(private http: HttpClient, private router: Router, private toastService: MzToastService) { }

  signIn() {
    return this.http.get<any>(this.authUrl)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  signedIn() {
    return !!localStorage.getItem('token');
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    this.toastService.show('You have been successfully signed out!', 4000, 'blue');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

