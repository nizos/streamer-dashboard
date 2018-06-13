/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:08:35
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:11:12
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.scss']
})
export class ClipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
