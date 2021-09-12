import {
  HttpClientModule
} from '@angular/common/http';
import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  SearchBarModule
} from './components/search-bar/search-bar.module';
import {
  SearchResultsModule
} from './components/search-results/search-results.module';
import {
  ToolbarModule
} from './components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SearchBarModule,
    SearchResultsModule,
    ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
