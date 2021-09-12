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
    MatCardModule,
    UserCardModule
  ],
  exports: [
    SearchResultsComponent
  ]
})
export class SearchResultsModule {}
