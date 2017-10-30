import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent,
  AboutComponent,
  ContactUsComponent
} from './components/index.pages';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nossa_historia', component: AboutComponent },
  { path: 'contate-nos', component: ContactUsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
