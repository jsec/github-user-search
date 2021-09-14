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
  public readonly GITHUB_PROJECT_LINK: string = "https://github.com/jsec/github-user-search";
  public searchControl: FormControl = new FormControl();

  constructor(
    private _apiService: GithubApiService,
    private _snackBar: MatSnackBar
  ) {}

  public search(): void {
    const searchText = this.searchControl.value as string;

    if (!searchText?.trim()) {
      this._snackBar.open('Search cannot be blank. Please enter a search term.', 'Dismiss', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000
      });

      this.searchControl.setValue(null);
      return;
    }

    this._apiService.getUsers(this.searchControl.value);
  }
}
