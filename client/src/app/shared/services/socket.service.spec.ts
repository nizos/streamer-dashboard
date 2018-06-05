/*
 * @Author: Nizars
 * @Date: 2018-06-05 02:14:23
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-05 02:14:23
 */

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocketService } from './socket.service';

describe('SocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketService]
    });
  });

  it('should ...', inject([SocketService], (service: SocketService) => {
    expect(service).toBeTruthy();
  }));
});
