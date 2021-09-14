import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import {
  MatSnackBar
} from '@angular/material/snack-bar';

import {
  GithubApiService
} from '../../services/github-api.service';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchText = new EventEmitter<string>();
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
