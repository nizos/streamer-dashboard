/*
 * @Author: Nizars
 * @Date: 2018-06-09 05:38:56
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-09 05:38:56
 */

import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
