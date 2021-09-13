import {
  Component,
  Input
} from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';

import {
  IUser
} from '../../interfaces/user.interface';
import {
  UserInfoDialogComponent
} from '../user-info-dialog/user-info-dialog.component';

@Component({
  selector: 'user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: IUser;

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
