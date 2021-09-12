import {
  NgModule
} from '@angular/core';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatDialogModule
} from '@angular/material/dialog';

import {
  UserInfoDialogModule
} from '../user-info-dialog/user-info-dialog.module';
import {
  UserCardComponent
} from './user-card.component';

@NgModule({
  declarations: [
    UserCardComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    UserInfoDialogModule
  ],
  exports: [
    UserCardComponent
  ]
})
export class UserCardModule {}
