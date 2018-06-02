/*
 * @Author: Nizars
 * @Date: 2018-05-31 21:38:02
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-31 21:39:43
 */

import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const authService = this.injector.get(AuthService);
    const tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
      }
    );
    return next.handle(tokenizedReq);
  }
}
