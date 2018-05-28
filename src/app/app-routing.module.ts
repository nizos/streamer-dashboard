/*
 * @Author: Nizars
 * @Date: 2018-05-27 06:30:25
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-27 10:03:45
 */

// Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';
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

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'channels',
        component: ChannelsComponent
    },
    {
        path: 'streams',
        component: StreamsComponent
    },
    {
        path: 'videos',
        component: VideosComponent
    },
    {
        path: 'clips',
        component: ClipsComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'games',
        component: GamesComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    {
        path: 'bot',
        component: BotComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'settings',
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
