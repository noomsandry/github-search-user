import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
 } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ToastService } from '@core/services/toast.service';


 @Injectable()
 export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private _toastService: ToastService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          this._toastService.show('Failed to send request', {
            classname: 'bg-danger text-light',
            delay: 3000,
          });
          console.error(errorMessage);
          return throwError(errorMessage);
        })
      )
  }
 }
