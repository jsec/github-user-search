import {
  NgModule
} from '@angular/core';
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
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule {}
