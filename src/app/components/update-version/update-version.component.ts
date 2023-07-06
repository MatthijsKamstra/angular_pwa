import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs';

@Component({
	selector: 'app-update-version',
	templateUrl: './update-version.component.html',
	styleUrls: ['./update-version.component.scss']
})
export class UpdateVersionComponent implements OnInit {

	modalVersion: boolean;
	info: string = '[nothing]';
	updatesAvailable: any;

	constructor(
		private swUpdate: SwUpdate
	) {
		this.modalVersion = false;
	}

	public ngOnInit(): void {
		if (this.swUpdate.isEnabled) {
			console.info(this.swUpdate.isEnabled);
			this.swUpdate.versionUpdates.pipe(
				filter((evt: any): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
				map((evt: any) => {
					console.info(`currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]`);
					this.info = `currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]`;
					this.modalVersion = true;
				}),
			);

			this.updatesAvailable = this.swUpdate.versionUpdates.pipe(
				filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
				map(evt => ({
					type: 'UPDATE_AVAILABLE',
					current: evt.currentVersion,
					available: evt.latestVersion,
				})));
		}
	}

	public updateVersion(): void {
		this.modalVersion = false;
		window.location.reload();
	}

	public closeVersion(): void {
		this.modalVersion = false;
	}

	getSwUpdate(): SwUpdate {
		return this.swUpdate;
	}

}
