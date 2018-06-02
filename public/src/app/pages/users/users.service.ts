import { User } from './users.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  private getUserByIdUrl          = 'http://localhost:3000/api/userbyid/';
  private getUserByLoginUrl       = 'http://localhost:3000/api/userbylogin/';

  constructor(private http: HttpClient) { }

  // Get a User by Id
  getUserById(userId) {
      return this.http.get<User>(this.getUserByIdUrl + userId);
  }

  // Get a User by Login
  getUserByLogin(userLogin) {
    return this.http.get<User>(this.getUserByLoginUrl + userLogin);
  }
}
