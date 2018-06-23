/*
 * @Author: Nizars
 * @Date: 2018-05-26 13:06:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-20 22:17:17
 */

import { Component, OnInit } from '@angular/core';
import { TwitchApiService } from '../../services/twitch-api/twitch-api.service';
import { User } from '../../models/twitch/twitch-api/user.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // LOADING
  loadingStarted = false;
  loadingEnded = false;

  // USER
  public users$: User[];

  // CONSTRUCTOR
  constructor(private twitchApi: TwitchApiService) {

  }

  // INITIALIZE
  ngOnInit() {
    this.users$ = [ ];
  }

  // GET USER BY LOGIN
  getUserByLogin(login) {
    this.twitchApi.getUserByLogin(login)
    .subscribe(user => {
      console.log('​UsersComponent -> getUserByLogin -> user', user.data[0]);
      this.users$.push(new User(user.data[0]));
      console.log('​UsersComponent -> getUserByLogin -> this.users$', this.users$);
    });
  }

  // GET USER BY ID
  getUserById(id) {
    this.twitchApi.getUserById(id)
    .subscribe(user => {
      this.users$.push(new User(user));
    });
  }

  clearUsers() {
    this.users$.forEach(user => {
      this.users$.pop();
    });
    this.users$ = [ ];
  }

  tabOnShow() {

  }
}
