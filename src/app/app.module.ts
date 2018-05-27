/*
 * @Author: Nizars
 * @Date: 2018-05-27 07:19:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-27 07:19:32
 */

// Angular
import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, Http, Response, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// RXJS
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

// Socket.io
import * as io from 'socket.io-client';

// Module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

// Services
import { SocketService } from './socket.service';
import { UsersService } from './users/users.service';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    UsersComponent,
    AppComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SocketService,
    UsersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private socketService: SocketService) {
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
