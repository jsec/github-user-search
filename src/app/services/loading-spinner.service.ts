import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingSpinnerService {
  public isLoading$: BehaviorSubject<boolean>;

  constructor() {
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  public show(): void {
    this.isLoading$.next(true);
  }

  public hide(): void {
    this.isLoading$.next(false);
  }
}
