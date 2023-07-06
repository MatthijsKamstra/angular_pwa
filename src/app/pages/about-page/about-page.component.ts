import { Component, OnInit } from '@angular/core';

import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs';


@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
	styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

	constructor() { }

}
