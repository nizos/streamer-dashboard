import { User } from './users.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
    private getUserByIdURL = 'http://localhost:3000/api/userbyid/';
    private getUserByLoginURL = 'http://localhost:3000/api/userbylogin/';

  constructor(private http: HttpClient) {
  }

  // Get a User by Id
  getUserById(userId) {
      return this.http.get<User>(this.getUserByIdURL + userId);
  }

  // Get a User by Login
  getUserByLogin(userLogin) {
    return this.http.get<User>(this.getUserByLoginURL + userLogin);
}
}
