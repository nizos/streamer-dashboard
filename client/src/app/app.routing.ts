/*
 * @Author: Nizars
 * @Date: 2018-06-12 02:25:41
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-25 18:16:25
 */

import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SigninComponent } from './pages/signin/signin.component';
import { UsersComponent } from './pages/users/users.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { StreamsComponent } from './pages/streams/streams.component';
import { VideosComponent } from './pages/videos/videos.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ClipsComponent } from './pages/clips/clips.component';
import { GamesComponent } from './pages/games/games.component';
import { ChatComponent } from './pages/chat/chat.component';
import { BotComponent } from './pages/bot/bot.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { BitsComponent } from './pages/bits/bits.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'channels',
    component: ChannelsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'streams',
    component: StreamsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'videos',
    component: VideosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clips',
    component: ClipsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'games',
    component: GamesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bits',
    component: BitsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bot',
    component: BotComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
