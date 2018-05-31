/*
 * @Author: Nizars
 * @Date: 2018-05-26 13:06:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-31 17:00:54
 */

import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { SocketService } from '../../socket.service';
import { User } from './users.model';
declare var particlesJS: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  activeUserFetchMethod = 'fetchUserByUsername';
  loadingStarted = false;
  loadingEnded = false;
  requestedId = '';
  requestedLogin = '';
  users = [];
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
  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    // Load particlesjs
    particlesJS.load('particles-js', '../../assets/particles/particles.json', null);
    console.log('PARTICLES-JS LOADED');

    // Load User
    this.usersService.getUserById(this.requestedId)
      .subscribe(user => {
        this.user = user;
        this.users.push(user);
      });

    // Load User
    this.usersService.getUserByLogin(this.requestedLogin)
      .subscribe(user => {
        this.user = user;
        this.users.push(user);
      });
  }

  getUserById(userId) {
    this.usersService.getUserById(this.requestedId)
      .subscribe(user => {
        this.user = user;
        this.users.push(user);
      });
  }

  getUserByLogin(userLogin) {
    this.usersService.getUserByLogin(this.requestedLogin)
      .subscribe(user => {
        this.user = user;
        this.users.push(user);
      });
  }

  onEnter(providedUserId) {
    this.requestedId = providedUserId;
    this.requestedLogin = providedUserId;
  }


  setFetchMethod(selectedFetchMethod) {
    this.activeUserFetchMethod = selectedFetchMethod;
  }
}
