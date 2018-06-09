/*
 * @Author: Nizars
 * @Date: 2018-05-27 06:30:25
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-09 05:55:33
 */

// Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

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
import { AuthGuard } from './auth/auth-guard/auth.guard';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
