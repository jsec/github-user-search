import {
  HttpClient,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  environment
} from 'src/environments/environment';

import {
  IGithubUserObject
} from '../interfaces/github-user-object.interface';
import {
  IGithubUserResponse
} from '../interfaces/github-user-response.interface';

@Injectable({ providedIn: 'root' })
export class GithubApiClient {
  private readonly GITHUB_SEARCH_URL: string = 'https://api.github.com/search/users?per_page=20&q=';
  private readonly GITHUB_USER_URL: string = 'https://api.github.com/users/';

  constructor(
    private _http: HttpClient
  ) {}

  public searchUsers(searchText: string): Observable<HttpResponse<IGithubUserResponse>> {
    return this._http.get<IGithubUserResponse>(this.GITHUB_SEARCH_URL + searchText, { headers: this.getHeaders(), observe: 'response' });
  }

  public getPaginatedUsers(url: string): Observable<HttpResponse<IGithubUserResponse>> {
    return this._http.get<IGithubUserResponse>(url, { headers: this.getHeaders(), observe: 'response' });
  }

  public getUser(userName: string): Observable<IGithubUserObject> {
    return this._http.get<IGithubUserObject>(this.GITHUB_USER_URL + userName, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Accept', 'application/vnd.github.v3+json')
      .set('Authorization', `token ${environment.GITHUB_AUTH_TOKEN}`)
      // .set('Authorization', `token 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`);
  }
}
