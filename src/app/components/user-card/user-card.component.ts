import {
  Component,
  Input
} from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';

import {
  UserInfoDialogComponent
} from '../user-info-dialog/user-info-dialog.component';

@Component({
  selector: 'user-card',
  templateUrl: 'user-card.component.html'
})
export class UserCardComponent {
  @Input() user?: any;

  constructor(
    private _dialog: MatDialog
  ) {}

  public goToProfile(): void {
    this._dialog.open(UserInfoDialogComponent, {
      height: '500px',
      width: '500px'
    });
  }
}
