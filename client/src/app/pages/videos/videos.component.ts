/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:10:25
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:12:59
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
