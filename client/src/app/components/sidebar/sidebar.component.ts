/*
 * @Author: Nizars
 * @Date: 2018-06-09 06:48:21
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-17 15:16:57
 */

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // ROUTER
  private currentUrl: string;
  tooltipDelay = 250;
  sidebarExpanded = false;

  sidebarCollapsedNavStyle = {
    'min-width': '64px',
    'max-width': '64px',
  };
  sidebarCollapsedButtonStyle = {
    'min-width': '64px',
    'max-width': '64px',
  };
  sidebarCollapsedTextStyle = {
    'visibility': 'hidden',
    'opacity': '0',
  };
  sidebarExpandedNavStyle = {
    'min-width': '250px',
    'max-width': '250px',
  };
  sidebarExpandedButtonStyle = {
    'min-width': '250px',
    'max-width': '250px',
  };
  sidebarExpandedTextStyle = {
    'visibility': 'visible',
    'opacity': '1',
  };

  sidebarNavStyle = this.sidebarCollapsedNavStyle;
  sidebarButtonStyle = this.sidebarCollapsedButtonStyle;
  sidebarTextStyle = this.sidebarCollapsedTextStyle;

  // CONSTRUCTOR
  constructor(private router: Router, private authService: AuthService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  // INITIALIZE
  ngOnInit() {

  }

  // TOGGLE SIDEBAR
  toggleSidebar() {
    if (this.sidebarExpanded) {
      this.sidebarNavStyle = this.sidebarCollapsedNavStyle;
      this.sidebarButtonStyle = this.sidebarCollapsedButtonStyle;
      this.sidebarTextStyle = this.sidebarCollapsedTextStyle;
      this.sidebarExpanded = false;
      this.enableTooltips();
    } else {
      this.sidebarNavStyle = this.sidebarExpandedNavStyle;
      this.sidebarButtonStyle = this.sidebarExpandedButtonStyle;
      this.sidebarTextStyle = this.sidebarExpandedTextStyle;
      this.sidebarExpanded = true;
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
