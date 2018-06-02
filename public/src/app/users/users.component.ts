/*
 * @Author: Nizars
 * @Date: 2018-05-26 13:06:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-02 16:47:32
 */

import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './users.model';
declare var particlesJS: any;

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
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

    ngOnInit() {
        // Load particlesjs
        particlesJS.load('particles-js', '../../assets/particles/particles.json', null);
        console.log('PARTICLES-JS LOADED');
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
