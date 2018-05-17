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

// Components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

// Services
import { SocketService } from './socket.service';
import { UserService } from './user/user.service';


@NgModule({
  declarations: [
    UserComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SocketService,
    UserService
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
