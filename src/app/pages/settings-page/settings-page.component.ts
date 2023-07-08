import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-settings-page',
	templateUrl: './settings-page.component.html',
	styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

	ua: string = '';
	platform: string = '';
	userAgent: string = '';
	_navigator: Navigator = navigator;

	ngOnInit(): void {
		this.ua = navigator.userAgent.toLowerCase();
		var isAndroid = this.ua.indexOf("android") > -1; //&& ua.indexOf("mobile");


		this.platform = navigator.platform;
		this.userAgent = navigator.userAgent;


		// console.log(navigator.userAgentData);

	}

}
