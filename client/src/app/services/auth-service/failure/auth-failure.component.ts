/*
 * @Author: Nizars
 * @Date: 2018-06-25 18:09:54
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-25 18:10:32
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authfailure',
  templateUrl: './auth-failure.component.html',
  styleUrls: ['./auth-failure.component.scss']
})
export class AuthFailureComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    window.opener.postMessage('AUTHERROR', '*');
  }
}
