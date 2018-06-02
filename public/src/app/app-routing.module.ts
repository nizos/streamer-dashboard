/*
 * @Author: Nizars
 * @Date: 2018-05-27 06:30:25
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-02 19:47:06
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

const routes: Routes = [
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
