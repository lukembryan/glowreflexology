import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOffersComponent } from './pricing-offers.component';

describe('PricingOffersComponent', () => {
  let component: PricingOffersComponent;
  let fixture: ComponentFixture<PricingOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
