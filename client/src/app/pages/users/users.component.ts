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
  userId = '';
  userLogin = '';
  public user = new User(
    'Id information',
    'Login information',
    'Display name information',
    'Type information',
    'Broadcaster type information',
    'Description information',
    '../../assets/images/TwitchProfileImageTemplate.png',
    '../../assets/images/TwitchOfflineImageTemplate300.png',
    'View count information'
  );

  // CONSTRUCTOR
  constructor(private usersService: UsersService) {

  }

  // INITIALIZE
  ngOnInit() {

  }

  // GET USER BY ID
  getUserById(userId) {
    this.usersService.getUserById(this.userId)
    .subscribe(user => {
      this.user = user;
    });
  }

  // GET USER BY NAME
  getUserByLogin(userLogin) {
    this.usersService.getUserByLogin(this.userLogin)
    .subscribe(user => {
    this.user = user;
    });
  }

  // SET USER INPUT
  onEnter(providedUserId) {
    this.userId = providedUserId;
    this.userLogin = providedUserId;
  }

  tabOnShow() {

  }
}
