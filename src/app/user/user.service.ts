import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  // Get a User by Id
  getUserById(userId) {
      console.log('Called: getUserById(', userId, ') from user.service.ts');
      return this.http.get('/api/user/' + userId);
  }
}
