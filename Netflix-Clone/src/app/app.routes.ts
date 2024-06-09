import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowseComponent } from './browse/browse.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
    path:"", 
    component:MainComponent, canActivate:[authGuard]
    },

    {
        path:"login",
        component:LoginPageComponent
    },

    {
        path:"browse",
        component:BrowseComponent, canActivate:[authGuard]
    }
];
