import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from "@angular/material/form-field";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MatMomentDateModule,
} from "@angular/material-moment-adapter";
import {
  MatCheckboxModule,
  MAT_CHECKBOX_DEFAULT_OPTIONS,
} from "@angular/material/checkbox";
import {
  MatRadioModule,
  MAT_RADIO_DEFAULT_OPTIONS,
} from "@angular/material/radio";

import { SlbNavigationFrameworkModule } from "@slb-dls/angular-material/navigation-framework";
import { SlbSharedModule } from "@slb-dls/angular-material/shared";
import {
  SlbNotificationModule,
  MessageService,
} from "@slb-dls/angular-material/notification";
import { SlbNotificationsPanelModule } from "@slb-dls/angular-material/notifications-panel";
import { SlbLogoutModule } from "@slb-dls/angular-material/logout";
import { SlbPopoverModule } from "@slb-dls/angular-material/popover";
import { SlbButtonModule } from "@slb-dls/angular-material/button";
import { SlbBreadcrumbsModule } from "@slb-dls/angular-material/breadcrumbs";
import { SlbFormFieldModule } from "@slb-dls/angular-material/form-field";
import {
  SLB_MOMENT_DATE_FORMATS,
  SLB_THEMING_OPTIONS,
} from "@slb-dls/angular-material/core";
import { MatCardModule } from "@angular/material/card";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ThemeSwitcherComponent } from "./theme-switcher/theme-switcher.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { themeConfig } from "../themes/theme.config";
import { BlockLicensesComponent } from "./components/block-licenses/block-licenses.component";
import { ContributorsComponent } from "./components/contributors/contributors.component";
import { DescriptionComponent } from "./components/description/description.component";
import { PropertiesComponent } from "./components/properties/properties.component";
import { ResourcesComponent } from "./components/resources/resources.component";
import { RisksComponent } from "./components/risks/risks.component";
import { StartComponent } from "./start/start.component";
import { NavbarComponent } from "./navandsidebar/navbar/navbar.component";
import { SidebarComponent } from "./navandsidebar/sidebar/sidebar.component";
import { MatTabsModule } from "@angular/material/tabs";

const appearance: MatFormFieldDefaultOptions = {
  appearance: "outline",
};

const defaultColor = {
  color: "primary",
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeSwitcherComponent,
    NotificationsComponent,
    BlockLicensesComponent,
    ContributorsComponent,
    DescriptionComponent,
    PropertiesComponent,
    ResourcesComponent,
    RisksComponent,
    StartComponent,
    NavbarComponent,
    SidebarComponent,
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
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatCardModule,
    DragDropModule,

    SlbSharedModule,
    SlbButtonModule,
    SlbFormFieldModule,
    SlbPopoverModule,
    SlbNotificationModule,
    SlbNotificationsPanelModule,
    SlbNavigationFrameworkModule,
    SlbBreadcrumbsModule,
    SlbLogoutModule,
    MatTabsModule,
  ],
  providers: [
    { provide: SLB_THEMING_OPTIONS, useValue: themeConfig },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: appearance },
    { provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: defaultColor },
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: defaultColor },
    { provide: MAT_DATE_FORMATS, useValue: SLB_MOMENT_DATE_FORMATS },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MessageService, useClass: MessageService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
