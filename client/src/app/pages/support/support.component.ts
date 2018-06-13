/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:09:59
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:12:37
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
