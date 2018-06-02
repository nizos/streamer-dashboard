/*
 * @Author: Nizars
 * @Date: 2018-05-27 07:19:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-02 15:18:34
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

// ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Socket.io
import * as io from 'socket.io-client';

// Module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChannelsComponent } from './channels/channels.component';
import { StreamsComponent } from './streams/streams.component';
import { VideosComponent } from './videos/videos.component';
import { ClipsComponent } from './clips/clips.component';
import { GamesComponent } from './games/games.component';
import { ChatComponent } from './chat/chat.component';
import { BotComponent } from './bot/bot.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

// Services
import { SocketService } from './socket.service';
import { UsersService } from './users/users.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SigninComponent,
    DashboardComponent,
    ChannelsComponent,
    StreamsComponent,
    VideosComponent,
    ClipsComponent,
    GamesComponent,
    ChatComponent,
    BotComponent,
    AboutComponent,
    SupportComponent,
    SettingsComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
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
  constructor(
    //   private socketService: SocketService
    ) {
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);

