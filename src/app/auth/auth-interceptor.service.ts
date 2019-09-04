import { Injectable } from '@angular/core';
import {
   HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams
 } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

   constructor(private authService: AuthService) { }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     request = request.clone({
       setHeaders: {
         Authorization: `Bearer ${this.authService.getToken()}`
       }
     });

     return next.handle(request);
   }
}
