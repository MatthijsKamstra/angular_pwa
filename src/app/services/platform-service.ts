import { Injectable } from '@angular/core';

import * as platform from 'platform';

@Injectable({
	providedIn: 'root'
})
export class PlatformService {

	IOS: boolean = false;
	SAFARI: boolean = false;
	ANDROID: boolean = false;

	platform: any;

	constructor() {
		console.log('platform.name: ' + platform.name);

		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");


		this.SAFARI = (platform.name == "Safari");
		this.ANDROID = isAndroid;

		console.log('platform.os: ' + platform.os);
		this.IOS = String(platform.os).indexOf('iOS') != -1;
	}

	getOS(): string {
		return String(platform.os);
	}

	getName(): string {
		return String(platform.name);
	}


	__iOSversion(): string {
		if (this.__iOS()) { // <-- Use the one here above
			if (window.indexedDB) { return 'iOS 8 and up'; }
			if (window.SpeechSynthesisUtterance) { return 'iOS 7'; }
			// if (window.webkitAudioContext) { return 'iOS 6'; }
			// if (window.matchMedia) { return 'iOS 5'; }
			if (window.history && 'pushState' in window.history) { return 'iOS 4'; }
			return 'iOS 3 or earlier';
		}
		return 'Not an iOS device';
	}

	__iOS(): boolean {
		console.log(navigator.platform);

		return [
			'iPad Simulator',
			'iPhone Simulator',
			'iPod Simulator',
			'iPad',
			'iPhone',
			'iPod',
			'MacIntel'
		].includes(navigator.platform)
			// iPad on iOS 13 detection
			|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)
	}


	// getOS() {
	// 	var userAgent = window.navigator.userAgent,
	// 		platform = window.navigator?.userAgent?.platform || window.navigator.platform,
	// 		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
	// 		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
	// 		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
	// 		os = null;

	// 	if (macosPlatforms.indexOf(platform) !== -1) {
	// 		os = 'Mac OS';
	// 	} else if (iosPlatforms.indexOf(platform) !== -1) {
	// 		os = 'iOS';
	// 	} else if (windowsPlatforms.indexOf(platform) !== -1) {
	// 		os = 'Windows';
	// 	} else if (/Android/.test(userAgent)) {
	// 		os = 'Android';
	// 	} else if (/Linux/.test(platform)) {
	// 		os = 'Linux';
	// 	}

	// 	return os;
	// }


	_platform(): any {
		return platform;
	}


	__getPlatformJS(): string {
		return `${JSON.stringify(platform, null, 2)}`;
	}
}
