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

	constructor(
		private swUpdate: SwUpdate
	) {
		this.modalVersion = false;
	}

	public ngOnInit(): void {
		if (this.swUpdate.isEnabled) {
			this.swUpdate.versionUpdates.pipe(
				filter((evt: any): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
				map((evt: any) => {
					console.info(`currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]`);
					this.modalVersion = true;
				}),
			);
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
