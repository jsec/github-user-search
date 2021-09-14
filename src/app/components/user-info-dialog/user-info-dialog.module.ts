import {
  CommonModule
} from '@angular/common';
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
  MatDividerModule
} from '@angular/material/divider';
import {
  MatListModule
} from '@angular/material/list';

import {
  UserInfoDialogComponent
} from './user-info-dialog.component';

@NgModule({
  declarations: [
    UserInfoDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    UserInfoDialogComponent
  ]
})
export class UserInfoDialogModule {}
