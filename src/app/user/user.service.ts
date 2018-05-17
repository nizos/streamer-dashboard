import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  // Get a User by Id
  getUserById(userId) {
    return this.http.get('/api/user/' + userId);
  }
}
