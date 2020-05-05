import {Routes} from "@angular/router";
import {homeRoutes} from "@app/routes/home";

export const routes: Routes = [
  ...homeRoutes,

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];
