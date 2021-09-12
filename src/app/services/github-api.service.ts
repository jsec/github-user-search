import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject
} from 'rxjs';

import {
  IUser
} from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class GithubApiService {
  public userData$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  constructor(
    private _http: HttpClient
  ) {}

  public getUsers(searchText: string): IUser[] {
    return [];
  }

  public fetchNextPage(): IUser[] {
    return [];
  }

  public fetchPreviousPage(): IUser[] {
    return [];
  }
}
