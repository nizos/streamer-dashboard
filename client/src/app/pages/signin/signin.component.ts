/*
 * @Author: Nizars
 * @Date: 2018-06-09 06:34:48
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-09 06:45:30
 */

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth-service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() { }

}
