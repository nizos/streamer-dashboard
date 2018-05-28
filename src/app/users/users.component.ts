/*
 * @Author: Nizars
 * @Date: 2018-05-26 13:06:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-27 14:15:53
 */
import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { SocketService } from '../socket.service';
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
    userId = '';

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        // Load particlesjs
        particlesJS.load('particles-js', '../../assets/particles/particles.json', null);
        console.log('PARTICLES-JS LOADED');

        // Load User
        console.log('Called: ngOnInit() in users.component.ts');
        this.usersService.getUserById(this.userId)
            .subscribe(user => {
            this.user = user;
            console.log('User in users.component.ts is: ', this.user);
        });
    }

    getUserById(userId) {
        console.log('Called: getUserById(', userId, '); from users.component.ts');
        this.usersService.getUserById(this.userId)
            .subscribe(user => {
            this.user = user;
            console.log('User in users.component.ts is: ', this.user);
        });
    }

    onEnter(providedUserId) {
        this.userId = providedUserId;
        console.log('Called: onEnter(', providedUserId, '); from users.component.ts');
        console.log('Updated: userId in users.component.ts is now ', this.userId);
    }
}
