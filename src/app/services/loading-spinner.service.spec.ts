import {
  TestBed
} from '@angular/core/testing';

import {
  LoadingSpinnerService
} from './loading-spinner.service';

describe('LoadingSpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadingSpinnerService
      ]
    });
  });

  it('should emit isLoading=true when asked to show the spinner', () => {
    const service = TestBed.inject(LoadingSpinnerService);
    service.show();
    expect(service.isLoading$.value).toBe(true);
  });

  it('should emit isLoading=false when asked to hide the spinner', () => {
    const service = TestBed.inject(LoadingSpinnerService);
    service.hide();
    expect(service.isLoading$.value).toBe(false);
  });
});
