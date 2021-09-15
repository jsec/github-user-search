import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  Subscription
} from 'rxjs';

import {
  ISearchResults
} from '../../interfaces/search-results.interface';
import {
  GithubApiService
} from '../../services/github-api.service';
import {
  LoadingSpinnerService
} from '../../services/loading-spinner.service';

@Component({
  selector: 'search-results',
  templateUrl: 'search-results.component.html',
  styleUrls: ['search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public searchResults: ISearchResults = <ISearchResults>{};
  private _subscriptions: Subscription[] = [];

  constructor(
    private _apiService: GithubApiService,
    private _spinnerService: LoadingSpinnerService
  ) {}

  public ngOnInit(): void {
    this._subscriptions.push(this._apiService.searchResults$.subscribe({
      next: (results) => this.searchResults = results
    }));

    this._subscriptions.push(this._spinnerService.isLoading$.subscribe({
      next: (isLoading) => this.isLoading = isLoading
    }));
  }

  public goToNextPage() {
    this._apiService.fetchNextPage();
  }

  public goToPreviousPage() {
    this._apiService.fetchPreviousPage();
  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach(s => s.unsubscribe());
  }
}
