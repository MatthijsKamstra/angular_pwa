import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {

	constructor(
		private notificationService: NotificationService
	) { }

	onNotificationHandler() {
		this.notificationService.info('hi');
	}

}
