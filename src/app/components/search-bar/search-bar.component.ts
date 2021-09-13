import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';

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
    private _apiService: GithubApiService
  ) {}

  public search(): void {
    this._apiService.getUsers(this.searchControl.value);
  }
}
