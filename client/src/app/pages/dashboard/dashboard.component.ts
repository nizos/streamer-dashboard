/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:08:46
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:11:17
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
