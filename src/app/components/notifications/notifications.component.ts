import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NotificationService } from 'src/app/services/notification.service';
import { NotificationEnum } from 'src/app/shared/enums/notification.enum';
import { INotification } from 'src/app/shared/interfaces/i-notification';

declare let bootstrap: any;

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

	subscription$!: Subscription;
	notifications: INotification[] = [];

	constructor(
		private notificationService: NotificationService,
	) { }

	ngOnInit(): void {
		this.subscription$ = this.notificationService.getObservable().subscribe(notification => {
			this.addNotification(notification);
		});
	}

	ngOnDestroy() {
		this.subscription$.unsubscribe();
	}

	addNotification(notification: INotification) {
		this.notifications.push(notification);

		// cleaning up array... might not be the best idea in combination with the default bootstrap js
		if (notification.duration !== 0) {
			setTimeout(() => this.close(notification), notification.duration + 2000); // adding 2 seconds delay to clean up array
		}

		// small delay to make sure the element is added to the dom
		setTimeout(() => {
			let obj = {
				autohide: notification.duration !== 0,
				delay: notification.duration
			}
			const toast = new bootstrap.Toast(document.getElementById(`${notification.id}`), obj);
			toast.show();
		}, 500);
	}

	addRandomNotification() {
		console.log('addRandomNotification()');
		let note: INotification = {
			id: 0,
			type: NotificationEnum.SUCCESS,
			title: 'title',
			message: 'body',
			duration: 0,
			date: new Date()
		}
		this.addNotification(note)
	}

	close(notification: INotification) {
		this.notifications = this.notifications.filter(notif => notif.id !== notification.id);
	}

	getBootstrapCssClassName(notification: INotification): string {
		let style: string;
		switch (notification.type) {
			case NotificationEnum.SUCCESS:
				// style = 'success';
				style = 'text-bg-success';
				break;
			case NotificationEnum.WARNING:
				// style = 'warning';
				style = 'text-bg-warning';
				break;
			case NotificationEnum.ERROR:
				// style = 'error';
				style = 'text-bg-danger';
				break;
			case NotificationEnum.INFO:
				// style = 'info';
				style = 'text-bg-info';
				break;
			case NotificationEnum.DEFAULT:
				style = 'info';
				// style = 'text-bg-info';
				break;
			default:
				style = 'info';
				break;
		}
		return style;
	}

	convertDate(date: Date) {
		return new Date(date).toLocaleTimeString('nl');
	}

}
