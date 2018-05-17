import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { SocketService } from '../socket.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: User;
  userId = '116069219';

  constructor(private userService: UserService, private dialog: MatDialog) {
  }

  ngOnInit() {
    // Load all gists
    this.userService.getUserById(this.userId)
      .subscribe(user => {
        this.user = user;
      });
  }
}
