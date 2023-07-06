import { Component, OnInit, VERSION } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
	selector: 'app-qrcode-page',
	templateUrl: './qrcode-page.component.html',
	styleUrls: ['./qrcode-page.component.scss']
})
export class QrcodePageComponent implements OnInit {


	// title = 'app';
	// elementType = 'url';
	// value = 'Techiediaries';

	name = 'Angular ' + VERSION.major;

	elementType = NgxQrcodeElementTypes.URL;
	correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
	value = 'https://www.techiediaries.com/';


	ngOnInit(): void {


		console.log(window.location);


		// this.value = this.getCurrentURL();

		let pathname = window.location.pathname;
		let pathnameArr = pathname.split(',');


		this.value = window.location.origin + pathnameArr[0];
	}

	getCurrentURL() {
		return window.location.href;
	}

}
