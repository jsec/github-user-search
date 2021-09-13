import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable,
  of
} from 'rxjs';
import {
  share,
  tap
} from 'rxjs/operators';

// borrowed from https://blog.logrocket.com/caching-with-httpinterceptor-in-angular/
@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private _cache: Map<HttpRequest<any>, HttpResponse<any>> = new Map();

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse = this._cache.get(req);

    if (cachedResponse) {
      return of(cachedResponse.clone());
    } else {
      return next.handle(req).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this._cache.set(req, event.clone());
          }
        }),
        share()
      )
    }
  }
}
