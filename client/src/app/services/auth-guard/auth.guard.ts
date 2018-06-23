/*
 * @Author: Nizars
 * @Date: 2018-06-09 05:13:06
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-09 07:01:18
 */

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import { MzToastService } from 'ngx-materialize';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private toastService: MzToastService) { }

  canActivate(): boolean {
    if (this.authService.signedIn()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      this.toastService.show('You need to sign in to access this page', 4000, 'black');
      return false;
    }
  }
}
