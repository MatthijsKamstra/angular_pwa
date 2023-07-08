import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

// https://angular.io/guide/service-worker-communications#updating-to-the-latest-version

@Injectable({
	providedIn: 'root'
})
export class HandleUnrecoverableStateService {

	constructor(updates: SwUpdate) {
		console.warn('HandleUnrecoverableStateService');
		console.warn(`updates.isEnabled: ${updates.isEnabled}`);
		updates.unrecoverable.subscribe(event => {
			notifyUser(
				'An error occurred that we cannot recover from:\n' +
				event.reason +
				'\n\nPlease reload the page.'
			);
		});
	}
}

function notifyUser(message: string) {
	console.warn(message);
}

