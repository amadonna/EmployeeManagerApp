import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeService} from "./employee.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgOptimizedImage,
        FormsModule
    ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
