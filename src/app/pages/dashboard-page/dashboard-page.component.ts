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
		private updates: SwUpdate
	) {
		// this.logUpdateService.hi();
	}


	onUpdate(): void {
		this.notificationService.info('update');
		this.updates
			.checkForUpdate()
			.then(() => this.updateCheckText = 'resolved')
			.catch(err => this.updateCheckText = `rejected: ${err.message}`);
	}

	onNotificationHandler() {
		this.notificationService.info('Test info');
	}


	testHandler() {
		this.notificationService.info('test');
		this.onUpdate();

		console.warn(this.updates.isEnabled);
		console.warn(this.updates.unrecoverable);
		console.warn(this.updates.versionUpdates);

		this.updates.versionUpdates.subscribe(evt => {
			console.info('this.updates.versionUpdates.subscribe');
			console.log(evt)
			switch (evt.type) {
				case 'VERSION_DETECTED':
					console.log(`Downloading new app version: ${evt.version.hash}`);
					log(`Downloading new app version: ${evt.version.hash}`);
					this.notificationService.info(`Downloading new app version: ${evt.version.hash}`);
					break;
				case 'VERSION_READY':
					console.log(`Current app version: ${evt.currentVersion.hash}`);
					console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
					log(`Current app version: ${evt.currentVersion.hash}`);
					log(`New app version ready for use: ${evt.latestVersion.hash}`);
					this.notificationService.info(`Current app version: ${evt.currentVersion.hash}`);
					this.notificationService.info(`New app version ready for use: ${evt.latestVersion.hash}`);
					break;
				case 'VERSION_INSTALLATION_FAILED':
					console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
					log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
					this.notificationService.info(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
					break;
				default:
					console.log(`Other message: ${evt.type} - ${evt}`);
					log(`Other message: ${evt.type} - ${evt}`);
					this.notificationService.info(`Other message: ${evt.type} - ${evt}`);
			}
		});
	}
}

function log(msg: string) {
	console.log("[LOG] " + msg);
}
