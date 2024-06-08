import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    {
    path:"", 
    component:MainComponent
    },

    {
        path:"register",
        component:LoginPageComponent
    }
];
