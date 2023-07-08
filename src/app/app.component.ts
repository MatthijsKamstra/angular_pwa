import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { IndexedDbService } from './services/indexed-db.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'angular_pwa';

	constructor(
		private update: SwUpdate,
		private appRef: ApplicationRef,
		private indexedDbService: IndexedDbService,
	) {
		this.updateClient();
		this.checkUpdate();
	}

	ngOnInit(): void {
		this.initFavicon();
	}

	// ____________________________________ update Client ____________________________________

	updateClient() {
		console.warn('updateClient');

		if (!this.update.isEnabled) {
			console.log('Not Enabled');
			return;
		}
		this.update.versionUpdates.subscribe((evt) => {
			console.log(`current`, evt.type);

			switch (evt.type) {
				case 'VERSION_DETECTED':
					console.log(`Downloading new app version: ${evt.version.hash}`);

					// this.notificationService.info(`Downloading new app version: ${evt.version.hash}`);
					break;
				case 'VERSION_READY':
					console.log(`Current app version: ${evt.currentVersion.hash}`);
					console.log(`New app version ready for use: ${evt.latestVersion.hash}`);


					// this.notificationService.info(`Current app version: ${evt.currentVersion.hash}`);
					// this.notificationService.info(`New app version ready for use: ${evt.latestVersion.hash}`);

					if (confirm('update available for the app please conform')) {
						this.update.activateUpdate().then(() => location.reload());
					}

					break;
				case 'VERSION_INSTALLATION_FAILED':
					console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
					// this.notificationService.info(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
					break;
				default:
					console.log(`Other message: ${evt.type} - ${evt}`);
				// this.notificationService.info(`Other message: ${evt.type} - ${evt}`);
			}



		});

		this.update.activateUpdate().then((event) => {
			console.log(`valueOf`, event.valueOf,);
		});
	}

	checkUpdate() {
		console.warn('checkUpdate');
		this.appRef.isStable.subscribe((isStable) => {
			if (isStable) {
				const timeInterval = interval(8 * 60 * 60 * 1000);

				timeInterval.subscribe(() => {
					this.update.checkForUpdate().then(() => console.log('checked'));
					console.log('update checked');
				});
			}
		});
	}

	// ____________________________________ db ____________________________________

	addUser() {
		let obj = {
			name: 'Subrat',
		};
		this.indexedDbService
			.addUser(obj.name)
			.then(console.log)
			.catch(console.warn);
	}

	// ____________________________________ favicon ____________________________________

	initFavicon() {
		if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
			let el: HTMLElement = this.getFaviconEl();
			// el.getAttribute("href");
			let emoji = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐸</text></svg>";
			el.setAttribute('href', emoji)
		}
	}

	getFavicon() {
		var favicon = undefined;
		var nodeList = document.getElementsByTagName("link");
		for (var i = 0; i < nodeList.length; i++) {
			if ((nodeList[i].getAttribute("rel") == "icon") || (nodeList[i].getAttribute("rel") == "shortcut icon")) {
				favicon = nodeList[i].getAttribute("href");
			}
		}
		return favicon;
	}
	getFaviconEl(): HTMLLinkElement {
		let el: HTMLLinkElement = document.createElement('link');
		let nodeList = document.getElementsByTagName("link");
		for (var i = 0; i < nodeList.length; i++) {
			if ((nodeList[i].getAttribute("rel") == "icon") || (nodeList[i].getAttribute("rel") == "shortcut icon")) {
				el = nodeList[i];
			}
		}
		return el;
	}
}


