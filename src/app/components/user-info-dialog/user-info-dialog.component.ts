import {
  Component,
  Inject
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

@Component({
  selector: 'user-info-dialog',
  templateUrl: 'user-info-dialog.component.html'
})
export class UserInfoDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserInfoDialogComponent>
  ) {}

  public goToProfile(): void {
    console.log('going to profile');
  }
}
