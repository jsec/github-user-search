import {
  HTTP_INTERCEPTORS,
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
import {
  CacheInterceptor
} from './interceptors/cache.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SearchBarModule,
    SearchResultsModule,
    ToolbarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
