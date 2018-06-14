/*
 * @Author: Nizars
 * @Date: 2018-05-27 07:19:05
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-12 03:14:29
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

// RXJS
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

// ROUTING
import { AppRoutingModule } from './app.routing';

// COMPONENTS
import { ComponentsModule } from './components/components.module';

// APP
import { AppComponent } from './app.component';

// PAGES
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


// Services
import { UsersService } from './pages/users/users.service';
import { SocketService } from './socket/socket.service';

// Auth
import { AuthGuard } from './auth/auth-guard/auth.guard';
import { AuthService } from './auth/auth-service/auth.service';
import { TokenInterceptorService } from './auth/token-interceptor/token-interceptor.service';


// // Ng module
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Angular Material
/// Form Controls
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSelectModule} from '@angular/material/select';
// import {MatSliderModule} from '@angular/material/slider';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// /// Navigation
// import {MatMenuModule} from '@angular/material/menu';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatToolbarModule} from '@angular/material/toolbar';
// /// Layout
// import {MatCardModule} from '@angular/material/card';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatListModule} from '@angular/material/list';
// import {MatStepperModule} from '@angular/material/stepper';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatTreeModule} from '@angular/material/tree';
// /// Buttons & Indicators
// import {MatButtonModule} from '@angular/material/button';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatChipsModule} from '@angular/material/chips';
// import {MatIconModule} from '@angular/material/icon';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
// /// Popups & Modals
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatTooltipModule} from '@angular/material/tooltip';
// /// Data table
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatSortModule} from '@angular/material/sort';
// import {MatTableModule} from '@angular/material/table';



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
  ],
  providers: [
    AuthService,
    AuthGuard,
    SocketService,
    UsersService,
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

