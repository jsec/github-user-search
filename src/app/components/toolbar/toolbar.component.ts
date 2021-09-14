import {
  Component
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  GithubApiService
} from 'src/app/services/github-api.service';

@Component({
  selector: 'tool-bar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss']
})
export class ToolbarComponent {
  public searchControl: FormControl = new FormControl();

  constructor(
    private _apiService: GithubApiService,
    private _snackBar: MatSnackBar
  ) {}

  public search(): void {
    const searchText = this.searchControl.value;

    if (!searchText) {
      this._snackBar.open('Search cannot be blank. Please enter a search term.', 'Dismiss', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000
      });

      return;
    }

    this._apiService.getUsers(this.searchControl.value);
  }
}
