/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:07:35
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:11:00
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
