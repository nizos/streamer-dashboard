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

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        // Load User
        this.userService.getUserById(this.userId)
            .subscribe(user => {
            this.user = user;
        });
    }

    getUserById(userId) {
        console.log('Called: getUserById(', userId, '); from user.component.ts');
        this.userService.getUserById(this.userId)
            .subscribe(user => {
            this.user = user;
        });
    }

    onEnter(providedUserId) {
        this.userId = providedUserId;
        console.log('Called: onEnter(', providedUserId, '); from user.component.ts');
        console.log('Updated: userId in user.component.ts is now ', this.userId);
    }
}
