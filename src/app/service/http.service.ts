import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(req.url==='/apis'){
      console.log('req',req)
      const authReq = req.clone({setHeaders: {Authorization: 'sbsbsb'}});
      return next.handle(authReq);
    }
    return next.handle(req);
   
  }
}