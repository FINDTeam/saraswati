import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceivePaymentComponent } from './add-receive-payment.component';

describe('AddReceivePaymentComponent', () => {
  let component: AddReceivePaymentComponent;
  let fixture: ComponentFixture<AddReceivePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReceivePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceivePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
