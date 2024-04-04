import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  // loadingInterceptorTeste: HttpInterceptorFn = (req, next) => {
  //   return next(req);
  // };

  private reactiveRequests = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.reactiveRequests === 0) {
      this.loadingService.show();
    }
    this.reactiveRequests++;
    return next
      .handle(req)
      .pipe(
        finalize(() => {
          this.reactiveRequests--;
          if(this.reactiveRequests === 0) {
            this.loadingService.hide();
          }
        })
      );
  }
}
