/*
 * @Author: Nizars
 * @Date: 2018-06-09 06:34:48
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-15 11:28:21
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

  // LOADING
  public loadingState = false;

  // CONSTRUCTOR
  constructor(private auth: AuthService, private router: Router) { }

  // INITIALIZE
  ngOnInit() {
    this.loadingState = false;
  }

  // GET LOADING STATE
  loading() {
    return this.loadingState;
  }

  // START LOADING
  loadingStart() {
    this.loadingState = true;
  }

  // STOP LOADING
  loadingStop() {
    this.loadingState = false;
  }

  tabOnShow() {

  }

}
