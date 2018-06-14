/*
 * @Author: Nizars
 * @Date: 2018-06-09 06:48:21
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-12 05:00:49
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

  // TOOLTIPS
  public tooltipsElements: any;
  public tooltipsInstances: any;
  public tooltipsOptions: any = {
    'position': 'right',
    'enterDelay': 300,
    'outDuration': 100
  };

  // CONSTRUCTOR
  constructor(private router: Router, private authService: AuthService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  // INITIALIZE
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      this.tooltipsElements = document.querySelectorAll('.tooltipped');
      this.tooltipsInstances = M.Tooltip.init(this.tooltipsElements, this.tooltipsOptions);
    });
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
    const sidebarButtons = Array.from(document.querySelectorAll('#sidebar-button'));
    sidebarButtons.forEach(sidebarButton => {
      if (!sidebarButton.classList.contains('tooltipped')) {
        sidebarButton.classList.add('tooltipped');
        M.Tooltip.init(sidebarButton, this.tooltipsOptions);
      }
    });
  }

  // DISABLE TOOLTIPS
  disableTooltips() {
    const sidebarButtons = Array.from(document.querySelectorAll('#sidebar-button'));
    sidebarButtons.forEach(sidebarButton => {
      if (sidebarButton.classList.contains('tooltipped')) {
        sidebarButton.classList.remove('tooltipped');
        const instance = M.Tooltip.getInstance(sidebarButton);
        instance.destroy();
      }
    });
  }

  // LOGG OUT
  logout() {
    this.authService.signOut();
  }
}
