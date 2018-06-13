/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:09:00
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:11:21
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
