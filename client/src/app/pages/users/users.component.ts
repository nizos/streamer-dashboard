/*
 * @Author: Nizars
 * @Date: 2018-05-26 13:06:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-02 20:29:02
 */

import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './users.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent {
    loadingStarted = false;
    loadingEnded = false;
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
    constructor(private usersService: UsersService) {

    }

    getUserById(userId) {
        this.usersService.getUserById(this.userId)
            .subscribe(user => {
            this.user = user;
        });
    }

    getUserByLogin(userLogin) {
        this.usersService.getUserByLogin(this.userLogin)
            .subscribe(user => {
            this.user = user;
        });
    }

    onEnter(providedUserId) {
        this.userId = providedUserId;
        this.userLogin = providedUserId;
    }
}
