import { Component } from '@angular/core';
import { LogUpdateService } from 'src/app/services/log-update.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {

	constructor(
		private notificationService: NotificationService,
		private logUpdateService: LogUpdateService,
	) {
		this.logUpdateService.hi();
	}

	onNotificationHandler() {
		this.notificationService.info('Test info');
	}

}
