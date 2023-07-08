import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-is-local',
	templateUrl: './app-is-local.component.html',
	styleUrls: ['./app-is-local.component.scss']
})
export class AppIsLocalComponent implements OnInit {

	environment = {
		apiEnabled: true
	}

	constructor() { }
	ngOnInit(): void {
		if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
			this.environment.apiEnabled = false;
		}
	}

	getIcon(): string {
		let icon = 'fa fa-toggle-off';
		// environment.apiEnabled
		if (this.environment.apiEnabled) {
			icon = 'fa fa-toggle-on';
		}
		return icon;
	}

	getDescription(): string {
		let val = 'Local';
		// environment.apiEnabled
		if (this.environment.apiEnabled) {
			val = 'Live';
		}
		return val;
	}
}
