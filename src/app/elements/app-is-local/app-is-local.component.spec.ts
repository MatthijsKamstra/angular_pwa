import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIsLocalComponent } from './app-is-local.component';

describe('AppIsLocalComponent', () => {
  let component: AppIsLocalComponent;
  let fixture: ComponentFixture<AppIsLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppIsLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppIsLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
