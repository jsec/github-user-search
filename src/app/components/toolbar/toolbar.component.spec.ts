import {
  NO_ERRORS_SCHEMA
} from '@angular/core';
import {
  TestBed
} from '@angular/core/testing';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  GithubApiService
} from 'src/app/services/github-api.service';
import {
  generateTestComponent
} from 'src/app/utilities/testing.utility';

import {
  ToolbarComponent
} from './toolbar.component';

describe('ToolbarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        ToolbarComponent
      ],
      providers: [
        {
          provide: GithubApiService,
          useValue: {
            getUsers: jasmine.createSpy('getUsers').and.callFake(() => {})
          }
        },
        {
          provide: MatSnackBar,
          useValue: {
            open: jasmine.createSpy('open').and.callFake(() => {})
          }
        }
      ]
    });
  });

  it('should open a snack bar warning if no search text is entered', () => {
    const { component } = generateTestComponent(ToolbarComponent);
    const snackBar = TestBed.inject(MatSnackBar);
    const apiService = TestBed.inject(GithubApiService);
    component.searchControl.setValue('');

    component.search();

    expect(snackBar.open).toHaveBeenCalled();
    expect(apiService.getUsers).not.toHaveBeenCalled();
  });

  it('should send the search request to the GitHub API service', () => {
    const { component } = generateTestComponent(ToolbarComponent);
    const snackBar = TestBed.inject(MatSnackBar);
    const apiService = TestBed.inject(GithubApiService);
    component.searchControl.setValue('jsec');

    component.search();

    expect(snackBar.open).not.toHaveBeenCalled();
    expect(apiService.getUsers).toHaveBeenCalledWith('jsec');
  })
});
