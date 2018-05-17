import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = [];
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this._userService.getUserById('116069219')
    .subscribe(
      res => {
        console.log('res: ');
        console.log(res);
        this.user = res;
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log(err);
            this._router.navigate(['/twitch/auth']);
          }
        }
      }
    );
  }

  getUserById(id: string) {
    this._userService.getUserById(id)
    .subscribe(
      res => this.user = res,
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log(err);
            this._router.navigate(['/twitch/auth']);
          }
        }
      }
    );
  }
}
