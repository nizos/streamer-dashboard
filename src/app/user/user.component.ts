import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { SocketService } from '../socket.service';
import { User } from './user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    public user: User;
    userId = '';
    _id = '';
    _login = '';
    _display_name = '';
    _type = '';
    _broadcaster_type = '';
    _description = '';
    _profile_image_url = '';
    _offline_image_url = '';
    _view_count = '';
    _email = '';

    constructor(private userService: UserService) {
    }

    ngOnInit() {
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
