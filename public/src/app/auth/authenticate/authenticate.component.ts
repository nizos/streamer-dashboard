/*
 * @Author: Nizars
 * @Date: 2018-05-31 22:45:30
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-01 01:36:09
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  authenticateUserData = { };

  constructor(private auth:   AuthService,
              private router: Router) { }

  ngOnInit() { }

  authenticateUser () {
    this.auth.authenticateUser(this.authenticateUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res['token']);
        this.router.navigate(['/users']);
      },
      err => console.log(err)
    );
  }
}
