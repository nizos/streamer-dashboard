import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private _usersUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getUserById(id: string) {
    const getURL = `${this._usersUrl}?id=${id}`;
    console.log(this.http.get<any>(getURL));
    return this.http.get<any>(getURL);
  }
}
