import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'angular_pwa';

	constructor() { }

	ngOnInit(): void {
		if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
			let el: HTMLElement = this.getFaviconEl();
			// el.getAttribute("href");
			let emoji = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐸</text></svg>";
			el.setAttribute('href', emoji)
		}
	}

	getFavicon() {
		var favicon = undefined;
		var nodeList = document.getElementsByTagName("link");
		for (var i = 0; i < nodeList.length; i++) {
			if ((nodeList[i].getAttribute("rel") == "icon") || (nodeList[i].getAttribute("rel") == "shortcut icon")) {
				favicon = nodeList[i].getAttribute("href");
			}
		}
		return favicon;
	}
	getFaviconEl(): HTMLLinkElement {
		let el: HTMLLinkElement = document.createElement('link');
		let nodeList = document.getElementsByTagName("link");
		for (var i = 0; i < nodeList.length; i++) {
			if ((nodeList[i].getAttribute("rel") == "icon") || (nodeList[i].getAttribute("rel") == "shortcut icon")) {
				el = nodeList[i];
			}
		}
		return el;
	}
}
