import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import {
  SlbNavigationFrameworkModule,
  SlbIconModule,
  SlbNotificationModule,
  SlbLogoutModule,
  SlbNotificationsPanelModule,
  SlbPopoverModule,
  SlbButtonModule,
  MessageService,
} from '@slb-dls/angular-material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeSwitcherComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,

    SlbButtonModule,
    SlbPopoverModule,
    SlbIconModule,
    SlbNotificationModule,
    SlbNotificationsPanelModule,
    SlbNavigationFrameworkModule,
    SlbLogoutModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MessageService, useClass: MessageService }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
