import { NotificationEnum } from "../enums/notification.enum";

export interface INotification {
	id: number,
	type: NotificationEnum,
	title: string,
	message: string,
	duration: number,
	date: Date;
}
