/*
 * @Author: Nizars
 * @Date: 2018-05-26 13:06:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-17 17:31:16
 */

import { Component, OnInit } from '@angular/core';
import { TwitchAPIService } from '../../services/twitchAPI/twitchAPI.service';
import { User } from '../../models/twitch/user.model';

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
  public usersByName$: User[];
  public usersById$: User[];

  // CONSTRUCTOR
  constructor(private twitchAPIService: TwitchAPIService) {

  }

  // INITIALIZE
  ngOnInit() {
    this.usersByName$ = [ ];
    this.usersById$ = [ ];
  }

  // GET USER BY ID
  getUserById(userIdInput) {
    this.twitchAPIService.getUser(userIdInput, null)
    .subscribe(user => {
      const newUser = new User(user);
      this.usersById$.push(newUser);
    });
  }

  // GET USER BY NAME
  getUserByName(usernameInput) {
    this.twitchAPIService.getUser(null, usernameInput)
    .subscribe(user => {
      const newUser = new User(user);
      this.usersByName$.push(newUser);
    });
  }

  clearUserByName() {
    this.usersByName$.forEach(user => {
      this.usersByName$.pop();
    });
    this.usersByName$ = [ ];
  }

  clearUserById() {
    this.usersById$.forEach(user => {
      this.usersById$.pop();
    });
    this.usersById$ = [ ];
  }

  tabOnShow() {

  }
}
