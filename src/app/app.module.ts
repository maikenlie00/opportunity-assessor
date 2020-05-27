import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormField } from '@angular/material/form-field';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from '@angular/material-moment-adapter';

import { SlbNavigationFrameworkModule } from '@slb-dls/angular-material/navigation-framework';
import { SlbSharedModule } from '@slb-dls/angular-material/shared';
import { SlbNotificationModule, MessageService } from '@slb-dls/angular-material/notification';
import { SlbNotificationsPanelModule } from '@slb-dls/angular-material/notifications-panel';
import { SlbLogoutModule } from '@slb-dls/angular-material/logout';
import { SlbPopoverModule } from '@slb-dls/angular-material/popover';
import { SlbButtonModule } from '@slb-dls/angular-material/button';
import { SlbBreadcrumbsModule } from '@slb-dls/angular-material/breadcrumbs';
import { SLB_MOMENT_DATE_FORMATS } from '@slb-dls/angular-material/date-and-time-pickers';
import { SLB_THEMING_OPTIONS } from '@slb-dls/angular-material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { themeConfig } from '../themes/theme.config';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

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
    ReactiveFormsModule,

    MatMomentDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatSlideToggleModule,

    SlbSharedModule,
    SlbButtonModule,
    SlbPopoverModule,
    SlbNotificationModule,
    SlbNotificationsPanelModule,
    SlbNavigationFrameworkModule,
    SlbBreadcrumbsModule,
    SlbLogoutModule
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: SLB_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MessageService, useClass: MessageService },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: appearance },
    { provide: SLB_THEMING_OPTIONS, useValue: themeConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
