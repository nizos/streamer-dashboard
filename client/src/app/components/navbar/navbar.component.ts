/*
 * @Author: Nizars
 * @Date: 2018-06-12 01:45:41
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-15 11:31:23
 */

import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../auth/auth-service/auth.service';
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

  }

  toggleSearchBar() {
    const searchFields = Array.from(document.querySelectorAll('#search-field'));
    searchFields.forEach(searchField => {

      if (!searchField.classList.contains('expanded')) {
        searchField.classList.add('expanded');
        console.log('Search field expanded');
      } else {
        searchField.classList.remove('expanded');
        console.log('Search field collapsed');
      }
    });
  }

  logout() {
    this.authService.signOut();
  }
}
