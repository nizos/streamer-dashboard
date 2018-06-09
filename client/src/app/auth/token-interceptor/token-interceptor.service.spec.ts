/*
 * @Author: Nizars
 * @Date: 2018-06-09 05:40:24
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-09 05:40:24
 */

import { TestBed, inject } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';

describe('TokenInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptorService]
    });
  });

  it('should be created', inject([TokenInterceptorService], (service: TokenInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
