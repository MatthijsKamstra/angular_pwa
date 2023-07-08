import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { LogUpdateService } from 'src/app/services/log-update.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {

	updateCheckText = '';

	constructor(
		private notificationService: NotificationService,
		// private logUpdateService: LogUpdateService,
		private update: SwUpdate
	) {
		// this.logUpdateService.hi();
	}


	updateCheck(): void {
		this.update
			.checkForUpdate()
			.then(() => this.updateCheckText = 'resolved')
			.catch(err => this.updateCheckText = `rejected: ${err.message}`);
	}

	onNotificationHandler() {
		this.notificationService.info('Test info');
	}

}
