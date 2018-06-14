/*
 * @Author: Nizars
 * @Date: 2018-06-12 01:45:41
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-12 04:59:23
 */

import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../auth/auth-service/auth.service';

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private currentUrl: string;

  constructor(private router: Router, private authService: AuthService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
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

  logout() {
    this.authService.signOut();
  }
}
