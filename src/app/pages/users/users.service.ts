import { User } from './users.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  // Get a User by Id
  getUserById(userId) {
      return this.http.get<User>('/api/userbyid/' + userId);
  }

  // Get a User by Login
  getUserByLogin(userLogin) {
    return this.http.get<User>('/api/userbylogin/' + userLogin);
}
}
