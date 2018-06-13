/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:08:19
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:11:07
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
