/*
 * @Author: Nizars
 * @Date: 2018-06-18 16:24:14
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-19 13:11:47
 */

/* Imports */
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeaderBuilderService {

  /* Header Builder Service private members */
  private CLIENT_ID = '64yjyuw2d5wjq45su6usd4s8micmnj';
  private ACCEPT = 'application/vnd.twitchtv.v5+json';
  private AUTHORIZATION = 'Bearer ';

  /* Header Builder Service Constructor */
  constructor() { }

  /**
   * @name createHeader
   * @description Creates HttpOptions for Twitch API requests
   * @returns HttpHeaders
   */
  createHeader() {
    const header = {
      headers: new HttpHeaders({
        'Client-ID': this.CLIENT_ID,
        'Accept': this.ACCEPT,
        'Authorization': this.AUTHORIZATION + this.getAccessToken()
      })
    };
    const httpHeaders = header.headers;
    console.log('Authorization: ');
    console.log(httpHeaders.get('Authorization'));
    return header;
  }


  /**
   * @name getAccessToken
   * @description Returns access token from browser's local storage
   * @returns access_token: string
   */
  getAccessToken() {
    const access_token = localStorage.getItem('token');
    console.log('access_token: ');
    console.log(access_token);
    return access_token;
  }
}
