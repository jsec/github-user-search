import { TestBed } from "@angular/core/testing"
import { GithubApiService } from "./github-api.service"

describe('GithubApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GithubApiService
      ]
    });
  });

  it('should convert the raw API data to a list of IUser objects', () => {

  });
});