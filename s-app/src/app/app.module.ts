import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';

import { DataTableModule } from "ng2-data-table";
import { ReceivePaymentComponent } from './receive-payment/receive-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ReceivePaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
