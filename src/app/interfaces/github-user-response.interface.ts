import {
  IGithubUserSearchResponse
} from './github-user-search-response.interface';

export interface IGithubUserResponse {
  incomplete_results: boolean;
  total_count: number;
  items: IGithubUserSearchResponse[];
}
