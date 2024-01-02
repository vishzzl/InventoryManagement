import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component"
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {path:"admin",component: LoginComponent},
    { path: '', component: HomeComponent },
];
