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
    console.log('is loading');
    this.isLoading$.next(true);
  }

  public hide(): void {
    console.log('is done loading');
    this.isLoading$.next(false);
  }
}
