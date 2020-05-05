import {Routes} from "@angular/router";
import {HomeComponent} from "@components/home/home.component";
import {LoginComponent} from "@components/authorization/login/login.component";

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: []
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
