/*
 * @Author: Nizars
 * @Date: 2018-06-09 06:48:21
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-15 13:23:52
 */

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../auth/auth-service/auth.service';
declare var M: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // ROUTER
  private currentUrl: string;
  tooltipDelay = 250;

  // CONSTRUCTOR
  constructor(private router: Router, private authService: AuthService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  // INITIALIZE
  ngOnInit() {
    this.tooltipDelay = 250;
  }

  // TOGGLE SIDEBAR
  toggleSidebar() {
    const sidebar = document.querySelector('#sidebar');
    const sidebarColumn = document.querySelector('#sidebar-column');
    if (sidebar.classList.contains('expanded')) {
      sidebarColumn.classList.remove('expanded');
      sidebar.classList.remove('expanded');
      this.enableTooltips();
    } else {
      sidebarColumn.classList.add('expanded');
      sidebar.classList.add('expanded');
      this.disableTooltips();
    }
  }

  // ENABLE TOOLTIPS
  enableTooltips() {
    this.tooltipDelay = 250;
  }

  // DISABLE TOOLTIPS
  disableTooltips() {
    this.tooltipDelay = 10000;
  }

  // LOGG OUT
  logout() {
    this.authService.signOut();
  }
}
