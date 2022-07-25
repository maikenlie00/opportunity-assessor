import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full',
    
  },
  {
    path: 'start',
    component: StartComponent,
    data: {
      title: 'Prospect Assessment',
    },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      showHeader: false,
      title: 'Cod analysis (#5369)'
      
    },
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    data: {
      showHeader: false,
      title: 'Build-In Notifications',
    },
  },
  {
    path: 'themes',
    component: ThemeSwitcherComponent,
    data: {
      title: 'Theme Switching',
      showHeader: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
