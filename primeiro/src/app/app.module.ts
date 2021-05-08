import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { area1Component } from './area1/area1.component';
import { area2Component } from './area2/area2.component';

@NgModule({
  declarations: [
    AppComponent,
    area1Component,
    area2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
