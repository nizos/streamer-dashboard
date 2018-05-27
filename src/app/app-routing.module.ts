/*
 * @Author: Nizars
 * @Date: 2018-05-27 06:30:25
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-05-27 06:45:08
 */

// Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: 'user',
        component: UsersComponent
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
