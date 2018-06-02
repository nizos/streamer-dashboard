/*
 * @Author: Nizars
 * @Date: 2018-05-31 21:37:30
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-01 01:08:26
 */

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router:      Router) { }

  canActivate(): boolean {
    if (this.authService.authenticated()) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      this.router.navigate(['/authenticate']);
      return false;
    }
  }
}
