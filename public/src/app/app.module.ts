import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, Http, Response, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import * as io from 'socket.io-client';
import {ToasterModule, ToasterService} from 'angular5-toaster';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { SocketService } from './socket.service';


@NgModule({
  declarations: [
    UserComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    HttpClientModule,
    ToasterModule,
    AppRoutingModule
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
    // this.socketService.consumeEvenOnGistSaved(); // Save event
    // this.socketService.consumeEvenOnGistUpdated(); // Update event
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
