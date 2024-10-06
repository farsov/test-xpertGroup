
import { Routes } from '@angular/router';

import { authGuard } from './custom/auth.guard';
import {LoginComponent} from "./modules/login/login.component";
import {HomeComponent} from "./modules/home/home.component";
import {RegisterComponent} from "./modules/register/register.componet";


export const routes: Routes = [
    {path:"", component:LoginComponent},
    {path:"registro", component:RegisterComponent},
    {path:"inicio", component:HomeComponent , canActivate:[authGuard]},
];
