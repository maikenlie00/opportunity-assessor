import { Component, } from '@angular/core';
import { MessageService, SlbSeverity } from '@slb-dls/angular-material/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  constructor(private messageService: MessageService) { }

  sayHello(target) {
    this.messageService.add({
      severity: SlbSeverity.Info,
      detail: 'Welcome to DLS Agular Material Boilerplate app!',
      summary: 'Hello',
      target,
    });
  }

}
