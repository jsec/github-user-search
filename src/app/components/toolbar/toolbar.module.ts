import {
  NgModule
} from '@angular/core';
import {
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatSnackBarModule
} from '@angular/material/snack-bar';
import {
  MatToolbarModule
} from '@angular/material/toolbar';

import {
  ToolbarComponent
} from './toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule {}
