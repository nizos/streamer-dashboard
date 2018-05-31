/*
 * @Author: Nizars
 * @Date: 2018-05-27 07:19:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-31 17:00:07
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

// ngx-bootstrap
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

// Socket.io
import * as io from 'socket.io-client';

// Module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { StreamsComponent } from './pages/streams/streams.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ClipsComponent } from './pages/clips/clips.component';
import { GamesComponent } from './pages/games/games.component';
import { ChatComponent } from './pages/chat/chat.component';
import { BotComponent } from './pages/bot/bot.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { BitsComponent } from './pages/bits/bits.component';

// Services
import { SocketService } from './socket.service';
import { UsersService } from './pages/users/users.service';

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
    HomeComponent,
    BitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    AlertModule.forRoot()
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

