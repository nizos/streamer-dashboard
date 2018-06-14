/*
 * @Author: Nizars
 * @Date: 2018-06-12 01:45:41
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-12 04:59:23
 */

import { Component, OnInit, ElementRef } from '@angular/core';
declare var $: any;
declare var M: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.dropdown-trigger');
      const options = {
        'coverTrigger': false,
        'alignment': 'right'
      };
      const instances = M.Dropdown.init(elems, options);
    });
  }
}
