import {
  HttpResponse
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject,
  from,
  Observable
} from 'rxjs';
import {
  concatMap,
  map,
  mergeMap,
  toArray
} from 'rxjs/operators';

import {
  GithubApiClient
} from '../clients/github-api.client';
import {
  IGithubUserResponse
} from '../interfaces/github-user-response.interface';
import {
  ISearchResults
} from '../interfaces/search-results.interface';
import {
  convertSearchResultsFromApi
} from '../utilities/search-result.utility';
import {
  getUserFromGithubUserObject
} from '../utilities/user.utility';
import {
  LoadingSpinnerService
} from './loading-spinner.service';

@Injectable({ providedIn: 'root' })
export class GithubApiService {
  public searchResults$: BehaviorSubject<ISearchResults>;

  constructor(
    private _githubClient: GithubApiClient,
    private _spinnerService: LoadingSpinnerService
  ) {
    this.searchResults$ = new BehaviorSubject<ISearchResults>(<ISearchResults>{});
  }

  public getUsers(searchText: string): void {
    const obs = this._githubClient.searchUsers(searchText);
    this.transformApiResponse(obs);
  }

  public fetchNextPage(): void {
    const obs = this._githubClient.getPaginatedUsers(<string>this.searchResults$.value.nextPageUrl);
    this.transformApiResponse(obs);
  }

  public fetchPreviousPage(): void {
    const obs = this._githubClient.getPaginatedUsers(<string>this.searchResults$.value.previousPageUrl);
    this.transformApiResponse(obs);
  }

  private transformApiResponse(obs: Observable<HttpResponse<IGithubUserResponse>>): void {
    this._spinnerService.show();
    obs.pipe(
      mergeMap((response) => {
        return from(response.body!.items).pipe(
          // use a concatMap here to ensure we're keeping the data in the same order
          // as we receive it from the API
          concatMap(user => this._githubClient.getUser(user.login)),
          map(user => getUserFromGithubUserObject(user)),
          toArray(),
          map(users => convertSearchResultsFromApi(response, response.headers, users))
        );
      })
    ).subscribe({
      next: results => {
        this.searchResults$.next(results);
        this._spinnerService.hide();
      },
      // would prefer to add better error handling here, but ran out of time
      error: err => {
        console.error(err);
        this._spinnerService.hide();
      }
    });
  }
}
