/*
 * @Author: Nizars
 * @Date: 2018-05-26 13:06:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-15 14:44:46
 */

import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './users.model';

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
  constructor(private usersService: UsersService) {

  }

  // INITIALIZE
  ngOnInit() {
    this.usersByName$ = [ ];
    this.usersById$ = [ ];
  }

  // GET USER BY ID
  getUserById(userIdInput) {
    this.usersService.getUserById(userIdInput)
    .subscribe(user => {
      const newUser = new User(
        user.data[0].id,
        user.data[0].login,
        user.data[0].display_name,
        user.data[0].type,
        user.data[0].broadcaster_type,
        user.data[0].description,
        user.data[0].profile_image_url,
        user.data[0].offline_image_url,
        user.data[0].view_count
      );
      this.usersById$.push(newUser);
    });
  }

  // GET USER BY NAME
  getUserByName(usernameInput) {
    this.usersService.getUserByName(usernameInput)
    .subscribe(user => {
      const newUser = new User(
        user.data[0].id,
        user.data[0].login,
        user.data[0].display_name,
        user.data[0].type,
        user.data[0].broadcaster_type,
        user.data[0].description,
        user.data[0].profile_image_url,
        user.data[0].offline_image_url,
        user.data[0].view_count
      );
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
