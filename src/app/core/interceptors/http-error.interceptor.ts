import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageService } from '../services/message.service';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {

  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next
      .handle(req)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          let errorMsg = '';

          if (err.error instanceof ErrorEvent){
            errorMsg = `Erros: ${err.error.message}`
          } else {
            errorMsg = `Erro código: ${err.status} - Mensagem: ${err.message}`
          }

          this.messageService.add(errorMsg);
          return throwError(() => Error(errorMsg))
        })
      );
  }
}
