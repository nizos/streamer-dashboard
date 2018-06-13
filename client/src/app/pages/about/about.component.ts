/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:07:48
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:07:48
 */


import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }
}
