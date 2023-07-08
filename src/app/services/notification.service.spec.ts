/*
- WARNING: this is a generated test.
- Most likely you need to change and update this file.
- Generated on: 2023-06-20
- Version: 0.2.6
*/

/*
Copyright 2014-2023 Smart Society Services B.V.
*/

import { TestBed } from '@angular/core/testing';

import { INOTIFICATION, SPEC_CONST } from 'src/app/shared/test/spec-helpers/constants.spec-helper';

import { NotificationService } from './notification.service';

// import directly from notificationService
import { INotification } from '../shared/interfaces/i-notification';
import { NotificationEnum } from '../shared/enums/notification.enum';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NotificationService (Generated)', () => {

	let service: NotificationService;
	let notificationServiceSpy: jasmine.SpyObj<NotificationService>;

	let translateService: TranslateService;
	let translateServiceSpy: jasmine.SpyObj<TranslateService>;

	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
				HttpClientTestingModule,
			],
			providers: [NotificationService, TranslateService,]
		});
		service = TestBed.inject(NotificationService);
		notificationServiceSpy = TestBed.inject(NotificationService) as jasmine.SpyObj<NotificationService>;

		translateService = TestBed.inject(TranslateService);
		translateServiceSpy = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
		// translateServiceSpy.[functionname].and.returnValue("foobar");
		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	// 1. Generated test for "convertMessage2TranslatedList"
	describe('convertMessage2TranslatedList', () => {

		// test with return type `string`
		it('#convertMessage2TranslatedList should return string', () => {
			// Arrange
			const _paramMessage: string = "goofy-DaimonHellstrom";
			const _returnString: string = "rainy-Geiger";
			const _spy = spyOn(service, 'convertMessage2TranslatedList').and.returnValue(_returnString);
			// Act
			service.convertMessage2TranslatedList(_paramMessage);
			// Assert
			expect(service.convertMessage2TranslatedList).toBeDefined();
			expect(service.convertMessage2TranslatedList(_paramMessage)).toBe(_returnString);
			expect(_spy).toHaveBeenCalled();
		});

		it('#convertMessage2TranslatedList should return string without li', () => {
			// Arrange
			const _paramMessage: string = "labored-Wendigo";
			// Act
			const _string: string = service.convertMessage2TranslatedList(_paramMessage);
			// Assert
			expect(_string).toEqual('<ul class="mb-0"></ul>');
		});

		it('#convertMessage2TranslatedList should return string with li', () => {
			// Arrange
			const _paramMessage: string = "la'bored'-Wendigo";
			// Act
			const _string: string = service.convertMessage2TranslatedList(_paramMessage);
			// Assert
			expect(_string).toEqual('<ul class="mb-0"><li>bored</li></ul>');
		});

		it('#convertMessage2TranslatedList should return string with li', () => {
			// Arrange
			const _paramMessage: string = "la'CREATE_NEW_GROUP_ALERT_PART_1'-Wendigo";
			// Act
			const _string: string = service.convertMessage2TranslatedList(_paramMessage);
			// Assert
			expect(_string).toEqual('<ul class="mb-0"><li>CREATE_NEW_GROUP_ALERT_PART_1</li></ul>');
		});

	});

	// 2. Generated test for "extractSingleQuotesMessages"
	describe('extractSingleQuotesMessages', () => {

		// test with return type `string[]`
		it('#extractSingleQuotesMessages should return string[]', () => {
			// Arrange
			const _paramMessage: string = "panoramic-MorganStark";
			const _returnString: string[] = ["wealthy-Spectrum", "wholesale-Electro"];
			const _spy = spyOn(service, 'extractSingleQuotesMessages').and.returnValue(_returnString);
			// Act
			service.extractSingleQuotesMessages(_paramMessage);
			// Assert
			expect(service.extractSingleQuotesMessages).toBeDefined();
			expect(service.extractSingleQuotesMessages(_paramMessage)).toBe(_returnString);
			expect(_spy).toHaveBeenCalled();
		});

		it('#extractSingleQuotesMessages should return string[]', () => {
			// Arrange
			const _paramMessage: string = "violent-XMen";
			// Act
			const _stringArray: string[] = service.extractSingleQuotesMessages(_paramMessage);
			// Assert
			expect(_stringArray).toEqual([]);
		});

		it('#extractSingleQuotesMessages should return string[]', () => {
			// Arrange
			const _paramMessage: string = "v'io'l'en't-'XM'en";
			// Act
			const _stringArray: string[] = service.extractSingleQuotesMessages(_paramMessage);
			// Assert
			expect(_stringArray).toEqual(['io', 'en', 'XM']);
		});

	});

	// 3. Generated test for "default"
	describe('default', () => {

		// test with return type `void`
		it('#should spy on "default" with return void', () => {
			// Arrange
			const _paramMessage: string = "teeny-tiny-CaptainStacy";
			const _paramDuration: number = 3000;
			// Act
			service.default(_paramMessage, _paramDuration);
			// Assert
			expect(service.default).toBeDefined();
		});

	});

	// 4. Generated test for "success"
	describe('success', () => {

		// test with return type `void`
		it('#should spy on "success" with return void', () => {
			// Arrange
			const _paramMessage: string = "skinny-Colossus";
			const _paramDuration: number = 3000;
			const _spy = spyOn(service, 'success');
			// Act
			service.success(_paramMessage, _paramDuration);
			// Assert
			expect(service.success).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

	});

	// 5. Generated test for "warning"
	describe('warning', () => {

		// test with return type `void`
		it('#should spy on "warning" with return void', () => {
			// Arrange
			const _paramMessage: string = "acidic-NorrinRadd";
			const _paramDuration: number = 3000;
			// Act
			service.warning(_paramMessage, _paramDuration);
			// Assert
			expect(service.warning).toBeDefined();
		});


	});

	// 6. Generated test for "error"
	describe('error', () => {

		// test with return type `void`
		it('#should spy on "error" with return void', () => {
			// Arrange
			const _paramMessage: string = "blue-eyed-Stingray";
			const _paramDuration: number = 0;
			// Act
			service.error(_paramMessage, _paramDuration);
			// Assert
			expect(service.error).toBeDefined();
		});

	});

	// 7. Generated test for "info"
	describe('info', () => {

		// test with return type `void`
		it('#should spy on "info" with return void', () => {
			// Arrange
			const _paramMessage: string = "cruel-Centurions";
			const _paramDuration: number = 3000;
			const _spy = spyOn(service, 'info');
			// Act
			service.info(_paramMessage, _paramDuration);
			// Assert
			expect(service.info).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

	});

	// 8. Generated test for "inject"
	describe('inject', () => {

		// test with return type `void`
		it('#should spy on "inject" with return void', () => {
			// Arrange
			const _paramMessage: string = "normal-Scarecrow";
			const _paramType: NotificationEnum = NotificationEnum.INFO;
			const _paramDuration: number = 3000;
			const _spy = spyOn(service, 'inject');
			// Act
			service.inject(_paramMessage, _paramType, _paramDuration);
			// Assert
			expect(service.inject).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

	});

	// 10. Generated test for "getObservable"
	describe('getObservable', () => {

		it('#should spy on "getObservable" call and return dummy data', () => {
			// Arrange
			const _INotification: INotification = SPEC_CONST.getValue(INOTIFICATION);
			// command click on "getObservable()" to see what value it will return
			const _spy = spyOn(service, 'getObservable').and.returnValue(of(_INotification));
			// Act
			service.getObservable();
			// Assert
			expect(service.getObservable).toHaveBeenCalledWith();

		});

	});

	describe('old tests', () => {

		it('private vars test', () => {
			service["_idx"] = 1;
			expect(service["_idx"]).toBe(1);
		});

		// 1. Generated test for "convertMessage2TranslatedList"
		it('#convertMessage2TranslatedList should return string', () => {
			// Arrange
			const message: string = "'boo', 'bah', 'bee'";
			const html = '<test>'

			const result: string = service.convertMessage2TranslatedList(message);
			const spy = spyOn(service, 'convertMessage2TranslatedList').and.returnValue(html);

			// Act
			service.convertMessage2TranslatedList(message);

			// Assert
			expect(spy).toHaveBeenCalled();
			expect(service.convertMessage2TranslatedList).toBeDefined();
			expect(service.convertMessage2TranslatedList(message)).toBe(html);
			expect(spy).toHaveBeenCalledTimes(2);
		});

		// 2. Generated test for "extractSingleQuotesMessages"
		it('#extractSingleQuotesMessages should return string[]', () => {
			// Arrange
			const message: string = "'boo', 'bah', 'bee'";
			const messageArray: string[] = ['boo', 'bah', 'bee'];
			const arr: string[] = ['1', '2'];

			const result: string[] = service.extractSingleQuotesMessages(message);
			const spy = spyOn(service, 'extractSingleQuotesMessages').and.returnValue(arr);

			// Act
			service.extractSingleQuotesMessages(message);

			// Assert
			expect(result).toEqual(messageArray);
			expect(service.extractSingleQuotesMessages).toBeDefined();
			expect(service.extractSingleQuotesMessages(message)).toBe(arr);
			expect(spy).toHaveBeenCalled();
		});

		// 3. Generated test for "default"
		it('#default should return void', () => {
			// Arrange
			const message: string = "";

			const duration = 400;
			const result = service.default(message, duration);
			const spy = spyOn(service, 'default');

			// Act
			service.default(message, duration);

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.default).toBeDefined();
		});

		// 4. Generated test for "success"
		it('#success should return void', () => {
			// Arrange
			const message: string = "";

			// FIXME: add (all) missing properties
			const _duration: number = 3000;
			const duration: number = SPEC_CONST.getValue(_duration);


			const result = service.success(message, duration);
			const spy = spyOn(service, 'success');

			// Act
			service.success(message, duration);

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.success).toBeDefined();
		});

		// 5. Generated test for "warning"
		it('#warning should return void', () => {
			// Arrange
			const message: string = "";
			const _duration: number = 3000; //;

			const result = service.warning(message, _duration);
			const spy = spyOn(service, 'warning');

			// Act
			service.warning(message, _duration);

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.warning).toBeDefined();
		});

		// 6. Generated test for "error"
		it('#error should return void', () => {
			// Arrange
			const message: string = "";
			const _duration: number = 3000; //;

			const result = service.error(message, _duration);
			const spy = spyOn(service, 'error');

			// Act
			service.error(message, _duration);

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.error).toBeDefined();
		});

		// 7. Generated test for "info"
		it('#info should return void', () => {
			// Arrange
			const _message: string = "";
			const _duration: number = 3000; //;

			const result = service.info(_message, _duration);
			const spy = spyOn(service, 'info');

			// Act
			service.info(_message, _duration);

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.info).toBeDefined();
		});

		// 8. Generated test for "inject"
		it('#inject should return void', () => {
			// Arrange
			const message: string = "";

			const _type: NotificationEnum = NotificationEnum.SUCCESS;
			const _duration: number = 3000; //;

			const result = service.inject(message, _type, _duration);
			const spy = spyOn(service, 'inject');

			// Act
			service.inject(message, _type, _duration);

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.inject).toBeDefined();
		});

		// 10. Generated test for "getObservable"
		it('#getObservable should return Observable<INotification>', () => {
			// Arrange
			const result = service.getObservable();
			const spy = spyOn(service, 'getObservable');
			// Act
			service.getObservable();
			// Assert
			expect(spy).toHaveBeenCalled();
			expect(service.getObservable).toBeDefined();
		});

	});

});
