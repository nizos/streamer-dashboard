import { User } from './users.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  // Get a User by Id
  getUserById(userId) {
      console.log('Called: getUserById(', userId, ') from users.service.ts');
      console.log('Result: ');
      console.log(this.http.get<User>('/api/user/' + userId));
      return this.http.get<User>('/api/user/' + userId);
  }
}
