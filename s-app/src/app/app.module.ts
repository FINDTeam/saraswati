import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';

import { DataTableModule } from "ng2-data-table";
import { ClassService } from "app/services/class.service";
import { ClassFormComponent } from './class-form/class-form.component';
import { AppRoutingModule } from "app/app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ClassFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [ClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
