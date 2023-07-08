import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { NotificationService } from './notification.service';

@Injectable({
	providedIn: 'root'
})
export class LogUpdateService {

	constructor(
		updates: SwUpdate,
		private notificationService: NotificationService
	) {
		updates.versionUpdates.subscribe(evt => {
			switch (evt.type) {
				case 'VERSION_DETECTED':
					console.log(`Downloading new app version: ${evt.version.hash}`);
					this.notificationService.info(`Downloading new app version: ${evt.version.hash}`);
					break;
				case 'VERSION_READY':
					console.log(`Current app version: ${evt.currentVersion.hash}`);
					console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
					this.notificationService.info(`Current app version: ${evt.currentVersion.hash}`);
					this.notificationService.info(`New app version ready for use: ${evt.latestVersion.hash}`);
					break;
				case 'VERSION_INSTALLATION_FAILED':
					console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
					this.notificationService.info(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
					break;
			}
		});
	}
}
