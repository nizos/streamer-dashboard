/*
 * @Author: Nizars
 * @Date: 2018-05-27 07:19:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-20 23:46:48
 */

// Angular
import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, Http, Response, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// APP
import { AppComponent } from './app.component';

// ROUTING
import { AppRoutingModule } from './app.routing';

// Services
import { TwitchApiService } from './services/twitch-api/twitch-api.service';
import { SocketService } from './services/socket/socket.service';
import { ReqControllerService } from './services/twitch-api/helpers/req-controller.service';
import { QueryBuilderService } from './services/twitch-api/helpers/query-builder.service';
import { HeaderBuilderService } from './services/twitch-api/helpers/header-builder.service';

// Auth
import { AuthGuard } from './services/auth-guard/auth.guard';
import { AuthService } from './services/auth-service/auth.service';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';

// COMPONENTS
import { ComponentsModule } from './components/components.module';

// PAGES
import { BitsComponent } from './pages/bits/bits.component';
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
import { LandingComponent } from './pages/landing/landing.component';


// MATERIALIZE
/// FORM CONTROL
import { MzButtonModule } from 'ngx-materialize';
import { MzCheckboxModule } from 'ngx-materialize';
import { MzChipModule } from 'ngx-materialize';
import { MzDatepickerModule } from 'ngx-materialize';
import { MzValidationModule } from 'ngx-materialize';
import { MzInputModule } from 'ngx-materialize';
import { MzRadioButtonModule } from 'ngx-materialize';
import { MzSelectModule } from 'ngx-materialize';
import { MzSwitchModule } from 'ngx-materialize';
import { MzTextareaModule } from 'ngx-materialize';
import { MzTimepickerModule } from 'ngx-materialize';
/// LAYOUT
import { MzCardModule } from 'ngx-materialize';
import { MzCollapsibleModule } from 'ngx-materialize';
import { MzCollectionModule } from 'ngx-materialize';
import { MzDropdownModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { MzNavbarModule } from 'ngx-materialize';
import { MzPaginationModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';
import { MzTabModule } from 'ngx-materialize';
/// LOADING
import { MzProgressModule } from 'ngx-materialize';
import { MzSpinnerModule } from 'ngx-materialize';
/// INDICATORS
import { MzBadgeModule } from 'ngx-materialize';
import { MzFeatureDiscoveryModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';
import { MzToastModule } from 'ngx-materialize';
import { MzTooltipModule } from 'ngx-materialize';
/// SERVICES
import { MzMediaModule } from 'ngx-materialize';


@NgModule({
  declarations: [
    // APP
    AppComponent,

    // PAGES
    AboutComponent,
    BotComponent,
    ChatComponent,
    ChannelsComponent,
    ClipsComponent,
    DashboardComponent,
    GamesComponent,
    HomeComponent,
    LandingComponent,
    ProfileComponent,
    StreamsComponent,
    SupportComponent,
    SettingsComponent,
    SigninComponent,
    UsersComponent,
    VideosComponent,
    BitsComponent
  ],
  imports: [

    // NATIVE
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule,

    // CREATED
    AppRoutingModule,
    ComponentsModule,

    // MATERIALIZE
    /// FORM CONTROL
    MzButtonModule,
    MzCheckboxModule,
    MzChipModule,
    MzDatepickerModule,
    MzValidationModule,
    MzInputModule,
    MzRadioButtonModule,
    MzSelectModule,
    MzSwitchModule,
    MzTextareaModule,
    MzTimepickerModule,
    /// LAYOUT
    MzCardModule,
    MzCollapsibleModule,
    MzCollectionModule,
    MzDropdownModule,
    MzModalModule,
    MzNavbarModule,
    MzPaginationModule,
    MzParallaxModule,
    MzSidenavModule,
    MzTabModule,
    /// LOADING
    MzProgressModule,
    MzSpinnerModule,
    /// INDICATORS
    MzBadgeModule,
    MzFeatureDiscoveryModule,
    MzIconModule,
    MzIconMdiModule,
    MzToastModule,
    MzTooltipModule,
    /// SERVICES
    MzMediaModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    SocketService,
    ReqControllerService,
    QueryBuilderService,
    HeaderBuilderService,
    TwitchApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

