/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:09:09
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:11:24
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var M: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }
}
