import {
  HttpClient
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {
  TestBed
} from '@angular/core/testing';

import {
  GithubApiClient
} from './github-api.client';

describe('GithubApiClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        GithubApiClient,
        HttpClient
      ]
    });
  });

  it('should call the correct API endpoint with the provided search parameters', () => {
    const httpTestingController = TestBed.inject(HttpTestingController);
    const service = TestBed.inject(GithubApiClient);

    service.searchUsers('test1').subscribe();

    const request = httpTestingController.expectOne('https://api.github.com/search/users?per_page=20&q=test1');
    request.flush([]);
    httpTestingController.verify();
  });

  it('should call the provided API endpoint when fetching a page of users', () => {
    const httpTestingController = TestBed.inject(HttpTestingController);
    const service = TestBed.inject(GithubApiClient);

    service.getPaginatedUsers('/some/route').subscribe();

    const request = httpTestingController.expectOne('/some/route');
    request.flush([]);
    httpTestingController.verify();
  });

  it('should call the correct API endpoint when fetching a specific user', () => {
    const httpTestingController = TestBed.inject(HttpTestingController);
    const service = TestBed.inject(GithubApiClient);

    service.getUser('bob').subscribe();

    const request = httpTestingController.expectOne('https://api.github.com/users/bob');
    request.flush({});
    httpTestingController.verify();
  });
});
