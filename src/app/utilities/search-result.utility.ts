import {
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import * as parse from 'parse-link-header';

import {
  IGithubUserResponse
} from '../interfaces/github-user-response.interface';
import {
  ISearchResults
} from '../interfaces/search-results.interface';
import {
  IUser
} from '../interfaces/user.interface';

export function convertSearchResultsFromApi(response: HttpResponse<IGithubUserResponse>, headers: HttpHeaders, users: IUser[]): ISearchResults {
  const paginationLinks = getPaginationLinks(headers);

  return {
    count: response.body!.total_count,
    nextPageUrl: paginationLinks.next,
    previousPageUrl: paginationLinks.prev,
    users: users
  };
}

function getPaginationLinks(headers: HttpHeaders): { prev: string | null, next: string | null } {
  const links = parse(headers.get('link') ?? '');

  return {
    prev: links?.prev ? links.prev.url : null,
    next: links?.next ? links.next.url : null
  };
}
