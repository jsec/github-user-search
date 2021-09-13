import {
  IUser
} from './user.interface';

export interface ISearchResults {
  count: number;
  nextPageUrl: string | null;
  previousPageUrl: string| null;
  users: IUser[];
}
