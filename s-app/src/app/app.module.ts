import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';

import { DataTableModule } from "ng2-data-table";
import { ReceivePaymentComponent } from './receive-payment/receive-payment.component';
import { AddReceivePaymentComponent } from './add-receive-payment/add-receive-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ReceivePaymentComponent,
    AddReceivePaymentComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'payment',
        component: ReceivePaymentComponent
      },
      {
        path: 'classes',
        component: ClassComponent
      },
      {
        path: 'newPayment',
        component: AddReceivePaymentComponent
      }
    ]),
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
