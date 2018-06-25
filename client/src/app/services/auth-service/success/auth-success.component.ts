/*
 * @Author: Nizars
 * @Date: 2018-06-25 17:57:06
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-25 18:08:59
 */

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-authsuccess',
  templateUrl: './auth-success.component.html',
  styleUrls: ['./auth-success.component.scss']
})
export class AuthSuccessComponent implements OnInit {

  constructor() {}

  ngOnInit() {
      window.opener.postMessage('AUTHCOMPLETE', '*');
  }
}
