import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs';
import { PlatformService } from 'src/app/services/platform-service';

@Component({
	selector: 'app-add-to-homescreen',
	templateUrl: './add-to-homescreen.component.html',
	styleUrls: ['./add-to-homescreen.component.scss']
})
export class AddToHomescreenComponent implements OnInit {

	modalPwaEvent: any;
	modalPwaPlatform: string | undefined;

	_platform!: PlatformService;

	constructor(
		private platform: PlatformService
	) {
	}

	public ngOnInit(): void {
		this._platform = this.platform;

		console.log('this.platform.ANDROID: ' + this.platform.ANDROID);
		console.log('this.platform.SAFARI: ' + this.platform.SAFARI);

		console.log('this.platform.getName(): ' + this.platform.getName());
		console.log('this.platform.getOS(): ' + this.platform.getOS());

		this.loadModalPwa();
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

}
