/*
 * @Author: Nizars
 * @Date: 2018-06-18 20:19:26
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-18 20:19:26
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bits',
  templateUrl: './bits.component.html',
  styleUrls: ['./bits.component.scss']
})
export class BitsComponent implements OnInit {

  public options: Pickadate.DateOptions = {
    format: 'dddd, dd mmm, yyyy',
    formatSubmit: 'yyyy-mm-dd',
  };

  public dateOfBirth = '2017-08-12'; // use formatSubmit format to set datepicker value

  // CONSTRUCTOR
  constructor() { }

  // INITIALIZE
  ngOnInit() {

  }

  tabOnShow() {

  }
}

