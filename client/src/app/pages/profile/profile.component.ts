/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:09:19
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:11:28
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
