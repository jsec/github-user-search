import {
  Component,
  Inject
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

import {
  IUser
} from '../../interfaces/user.interface';

@Component({
  selector: 'user-info-dialog',
  templateUrl: 'user-info-dialog.component.html',
  styleUrls: ['user-info-dialog.component.scss']
})
export class UserInfoDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IUser,
    public dialogRef: MatDialogRef<UserInfoDialogComponent>
  ) {}
}
