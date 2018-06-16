import { User } from './users.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
    private getUserByIdURL = 'http://localhost:3000/api/userbyid/';
    private getUserByLoginURL = 'http://localhost:3000/api/userbylogin/';

  constructor(private http: HttpClient) {
  }

  // Get a User by Id
  getUserById(userId: string) {
    // Get token from local storage
    // Make request
    // Return user
    const token = localStorage.getItem('token');
    const url = `https://api.twitch.tv/helix/users?id=${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    return this.http.get<any>(url, httpOptions);
  }

  // Get a User by Login
  getUserByName(userLogin: string) {
    const token = localStorage.getItem('token');
    const url = `https://api.twitch.tv/helix/users?login=${userLogin}`;
    const httpOptions = {
      headers: new HttpHeaders({
          'Client-ID': '64yjyuw2d5wjq45su6usd4s8micmnj',
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Authorization': 'Bearer ' + token
      })
    };

    return this.http.get<any>(url, httpOptions);
  }
}
