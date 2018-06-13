/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:09:29
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:11:32
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
