import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { SlbNotificationItem, } from '@slb-dls/angular-material/notifications-panel';
import { MessageService } from '@slb-dls/angular-material/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  notificationCount: 10;
  notificationItems: SlbNotificationItem[] = [];

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg-symbols.svg'));
  }

}
