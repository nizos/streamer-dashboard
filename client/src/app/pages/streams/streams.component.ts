/*
 * @Author: Nizars
 * @Date: 2018-06-13 15:09:46
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-13 15:11:44
 */

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }

}
