import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInfoPageComponent } from './products-info-page.component';

describe('ProductsInfoPageComponent', () => {
  let component: ProductsInfoPageComponent;
  let fixture: ComponentFixture<ProductsInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
