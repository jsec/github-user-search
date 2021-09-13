import {
  CommonModule
} from '@angular/common';
import {
  NgModule
} from '@angular/core';
import {
  MatCardModule
} from '@angular/material/card';

import {
  UserCardModule
} from '../user-card/user-card.module';
import {
  SearchResultsComponent
} from './search-results.component';

@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    UserCardModule
  ],
  exports: [
    SearchResultsComponent
  ]
})
export class SearchResultsModule {}
