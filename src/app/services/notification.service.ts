import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { INotification } from '../shared/interfaces/i-notification';
import { NotificationEnum } from '../shared/enums/notification.enum';

/**
 *
 * The NotificationService is responsible for displaying notifications in the form of Bootstrap toasts to the user.
 *
 * The Notification types are: `error`, `success`, `warning`, `info`
 * The error-notification will not autohide, the other notifications will hide after 3 seconds (default)
 *
 * @example
 * ```ts
		this.notificationService.error(this.translate.instant('SAVE_SETTINGS_ERROR'));
 * ```
 */
@Injectable({
	providedIn: 'root'
})
export class NotificationService {

	/**
	 * The `notification` subject is used to publish notification objects to any subscribers.
	 */
	private _notification = new Subject<INotification>();

	/**
	 * The `_idx` property is used to keep track of the number of notifications that have been created.
	 */
	private _idx = 0;

	constructor() { }

	// ____________________________________ tools ____________________________________


	extractSingleQuotesMessages(message: string): string[] {
		const regex = /'([^']+)'/g;
		let match;
		let arr = [];
		while ((match = regex.exec(message))) {
			arr.push(match[1])
		}
		return arr;
	}

	// ____________________________________ toasts/notification types ____________________________________

	/**
	 * Displays a notification of type "default".
	 *
	 * @param message The message to display in the notification.
	 * @param duration The length of time to display the notification, in milliseconds.
	 */
	default(message: string, duration: number = 3000): void {
		this.notify(message, NotificationEnum.DEFAULT, duration);
	}

	/**
	 * Displays a notification of type "success".
	 *
	 * @param message The message to display in the notification.
	 * @param duration The length of time to display the notification, in milliseconds.
	 */
	success(message: string, duration: number = 3000): void {
		this.notify(message, NotificationEnum.SUCCESS, duration);
	}

	/**
	 * Displays a notification of type "warning".
	 *
	 * @param message The message to display in the notification.
	 * @param duration The length of time to display the notification, in milliseconds.
	 */
	warning(message: string, duration: number = 3000): void {
		this.notify(message, NotificationEnum.WARNING, duration);
	}

	/**
	 * Displays a notification of type "error".
	 *
	 * @param message The message to display in the notification.
	 * @param duration The length of time to display the notification, in milliseconds. Set to 0 to prevent the notification from auto-hiding.
	 */
	error(message: string, duration: number = 0): void {
		this.notify(message, NotificationEnum.ERROR, duration);
	}

	/**
	 * Displays a notification of type "info".
	 *
	 * @param message The message to display in the notification.
	 * @param duration The length of time to display the notification, in milliseconds.
	 */
	info(message: string, duration: number = 3000): void {
		this.notify(message, NotificationEnum.INFO, duration);
	}

	/**
	 * hack to inject code into
	 *
	 * @param message
	 * @param type
	 * @param duration
	 */
	inject(message: string, type: NotificationEnum, duration: number = 3000): void {
		if (type === NotificationEnum.ERROR) duration = 0;
		let out = message;
		// if (out.indexOf('{{') === -1) { // if it has `{{` it's probably an answer from the server
		// 	out = message;
		// } else {
		// 	out = this.convertMessage2TranslatedList(message);
		// }
		this.notify(out, type, duration);
	}

	/**
	 * Private method that publishes a new notification object to any subscribers.
	 *
	 * @param message The message to display in the notification.
	 * @param type The type of the notification.
	 * @param duration The length of time to display the notification, in milliseconds.
	 */
	private notify(message: string, type: NotificationEnum, duration: number = 3000): void {
		if (message === undefined) message = '🐞';
		this._notification.next({
			id: this._idx++,
			type: type,
			title: '',
			message: message,
			duration: duration,
			date: new Date(),
		} as INotification);
	}

	/**
	 * Returns an observable that can be used to subscribe to notifications.
	 *
	 * @returns An observable that emits notification objects.
	 */
	getObservable(): Observable<INotification> {
		return this._notification.asObservable();
	}
}
