import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receive-payment',
  templateUrl: './receive-payment.component.html',
  styleUrls: ['./receive-payment.component.css']
})
export class ReceivePaymentComponent implements OnInit {
private data: any[]=[{id:1,paymentDate:"2017/04/24",paymentAmount:"20000"},{id:2,paymentDate:"2017/04/25",paymentAmount:"30000"},{id:3,paymentDate:"2017/04/26",paymentAmount:"40000"}];
  constructor() { }

  ngOnInit() {
  }

}
