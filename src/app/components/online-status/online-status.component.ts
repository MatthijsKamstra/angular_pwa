import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-online-status',
	templateUrl: './online-status.component.html',
	styleUrls: ['./online-status.component.scss']
})
export class OnlineStatusComponent implements OnInit {

	isOnline: boolean;

	constructor() {
		this.isOnline = false;
	}

	public ngOnInit(): void {
		this.updateOnlineStatus();

		window.addEventListener('online', this.updateOnlineStatus.bind(this));
		window.addEventListener('offline', this.updateOnlineStatus.bind(this));
	}

	private updateOnlineStatus(): void {
		this.isOnline = window.navigator.onLine;
		console.info(`isOnline=[${this.isOnline}]`);
	}

}
