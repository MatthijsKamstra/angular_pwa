import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs';

@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
	styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

	isOnline: boolean;
	modalVersion: boolean;
	modalPwaEvent: any;
	modalPwaPlatform: string | undefined;

	constructor(
		private platform: Platform,
		private swUpdate: SwUpdate
	) {
		this.isOnline = false;
		this.modalVersion = false;
	}

	public ngOnInit(): void {
		this.updateOnlineStatus();

		window.addEventListener('online', this.updateOnlineStatus.bind(this));
		window.addEventListener('offline', this.updateOnlineStatus.bind(this));

		if (this.swUpdate.isEnabled) {
			this.swUpdate.versionUpdates.pipe(
				filter((evt: any): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
				map((evt: any) => {
					console.info(`currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]`);
					this.modalVersion = true;
				}),
			);
		}

		this.loadModalPwa();
	}

	private updateOnlineStatus(): void {
		this.isOnline = window.navigator.onLine;
		console.info(`isOnline=[${this.isOnline}]`);
	}

	public updateVersion(): void {
		this.modalVersion = false;
		window.location.reload();
	}

	public closeVersion(): void {
		this.modalVersion = false;
	}

	private loadModalPwa(): void {
		if (this.platform.ANDROID) {
			window.addEventListener('beforeinstallprompt', (event: any) => {
				event.preventDefault();
				this.modalPwaEvent = event;
				this.modalPwaPlatform = 'ANDROID';
			});
		}

		if (this.platform.IOS && this.platform.SAFARI) {
			const isInStandaloneMode = ('standalone' in window.navigator) && ((<any>window.navigator)['standalone']);
			if (!isInStandaloneMode) {
				this.modalPwaPlatform = 'IOS';
			}
		}
	}

	public addToHomeScreen(): void {
		this.modalPwaEvent.prompt();
		this.modalPwaPlatform = undefined;
	}

	public closePwa(): void {
		this.modalPwaPlatform = undefined;
	}

	getPlatform(): any {
		return JSON.stringify(this.platform);
	}
	getSwUpdate(): any {
		return JSON.stringify(this.swUpdate);
	}

	iOSversion(): string {

		if (this.iOS()) { // <-- Use the one here above
			if (window.indexedDB) { return 'iOS 8 and up'; }
			if (window.SpeechSynthesisUtterance) { return 'iOS 7'; }
			// if (window.webkitAudioContext) { return 'iOS 6'; }
			// if (window.matchMedia) { return 'iOS 5'; }
			if (window.history && 'pushState' in window.history) { return 'iOS 4'; }
			return 'iOS 3 or earlier';
		}

		return 'Not an iOS device';
	}

	iOS(): boolean {
		return [
			'iPad Simulator',
			'iPhone Simulator',
			'iPod Simulator',
			'iPad',
			'iPhone',
			'iPod'
		].includes(navigator.platform)
			// iPad on iOS 13 detection
			|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)
	}



}
