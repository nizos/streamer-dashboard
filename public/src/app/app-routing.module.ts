/*
 * @Author: Nizars
 * @Date: 2018-05-27 06:30:25
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-01 01:07:00
 */

// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guard
import { AuthGuard } from './auth.guard';

// Components
import { SigninComponent } from './pages/signin/signin.component';
import { UsersComponent } from './pages/users/users.component';
import { AppComponent } from './app.component';
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
import { AuthenticateComponent } from './auth/authenticate/authenticate.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'channels',
        canActivate: [AuthGuard],
        component: ChannelsComponent
    },
    {
        path: 'streams',
        canActivate: [AuthGuard],
        component: StreamsComponent
    },
    {
        path: 'videos',
        // canActivate: [AuthGuard],
        component: VideosComponent
    },
    {
        path: 'clips',
        canActivate: [AuthGuard],
        component: ClipsComponent
    },
    {
        path: 'users',
        canActivate: [AuthGuard],
        component: UsersComponent
    },
    {
        path: 'games',
        canActivate: [AuthGuard],
        component: GamesComponent
    },
    {
        path: 'bits',
        canActivate: [AuthGuard],
        component: BitsComponent
    },
    {
        path: 'chat',
        canActivate: [AuthGuard],
        component: ChatComponent
    },
    {
        path: 'bot',
        canActivate: [AuthGuard],
        component: BotComponent
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent
    },
    {
        path: 'settings',
        canActivate: [AuthGuard],
        component: SettingsComponent
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
    },
    {
        path: 'authenticate',
        component: AuthenticateComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
