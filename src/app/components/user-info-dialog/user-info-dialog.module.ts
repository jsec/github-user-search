import {
  NgModule
} from '@angular/core';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatDialogModule
} from '@angular/material/dialog';

import {
  UserInfoDialogComponent
} from './user-info-dialog.component';

@NgModule({
  declarations: [
    UserInfoDialogComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    UserInfoDialogComponent
  ]
})
export class UserInfoDialogModule {}
