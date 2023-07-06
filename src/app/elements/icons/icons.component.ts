import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-icons',
	templateUrl: './icons.component.html',
	styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
	@Input() icon!: string;

	constructor() { }

	ngOnInit(): void {
		this.setIcon();
	}

	setIcon(): void {
		// use as default
		if (this.icon == null) this.icon = '?';

		// when using `fa-xxx` we assume you know what you are talking about
		if (this.icon.indexOf('fa-') != -1) return;

		switch (this.icon.toLowerCase()) {
			case 'create': this.icon = 'fa-pencil'; break;

			default:
				console.log(`case '${this.icon.toLowerCase()}': this.icon = '${this.icon.toLowerCase()}'; break;`);
				this.icon = 'fa-remove';
				// https://ficons.fiction.com/reference.html
				break;
		}
	}
}
