/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:08:01
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:08:01
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
