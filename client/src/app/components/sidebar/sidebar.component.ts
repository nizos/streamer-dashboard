/*
 * @Author: Nizars
 * @Date: 2018-06-09 06:48:21
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-12 05:00:49
 */


import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../auth/auth-service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private currentUrl: string;

  constructor(private router: Router, private authService: AuthService) {
      router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
  }

  logout() {
    this.authService.signOut();
  }

}
