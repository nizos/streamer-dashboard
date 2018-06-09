/*
 * @Author: Nizars
 * @Date: 2018-06-09 05:37:38
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-09 05:37:38
 */

import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
