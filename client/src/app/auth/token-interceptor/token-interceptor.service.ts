/*
 * @Author: Nizars
 * @Date: 2018-06-09 05:39:42
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-09 05:43:08
 */

import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(req, next) {
    const authService = this.injector.get(AuthService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
