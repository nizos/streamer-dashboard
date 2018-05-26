/*
 * @Author: Nizars
 * @Date: 2018-05-26 13:06:05
 * @Last Modified by:   Nizars
 * @Last Modified time: 2018-05-26 13:06:05
 */
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { SocketService } from '../socket.service';
import { User } from './user.model';
declare var particlesJS: any;

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
        'View count information',
        'Email information'
    );
    userId = '';

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        // Load particlesjs
        particlesJS.load('particles-js', '../../assets/particles/particles.json', null);
        console.log('PARTICLES-JS LOADED');

        // Load User
        console.log('Called: ngOnInit() in user.component.ts');
        this.userService.getUserById(this.userId)
            .subscribe(user => {
            this.user = user;
            console.log('User in user.component.ts is: ', this.user);
        });
    }

    getUserById(userId) {
        console.log('Called: getUserById(', userId, '); from user.component.ts');
        this.userService.getUserById(this.userId)
            .subscribe(user => {
            this.user = user;
            console.log('User in user.component.ts is: ', this.user);
        });
    }

    onEnter(providedUserId) {
        this.userId = providedUserId;
        console.log('Called: onEnter(', providedUserId, '); from user.component.ts');
        console.log('Updated: userId in user.component.ts is now ', this.userId);
    }
}
