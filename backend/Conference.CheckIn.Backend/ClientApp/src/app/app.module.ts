import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatMenuModule
} from '@angular/material';

import { NavBar } from './shared/navbar/navbar';
import { AttendeeList } from './pages/attendee-list/attendee-list';
import { RealTimeViewer } from './pages/realtime-viewer/realtime-viewer';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    AttendeeList,
    RealTimeViewer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
