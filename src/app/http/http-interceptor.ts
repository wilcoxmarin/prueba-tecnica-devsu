import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq  = req;
    const headers = new HttpHeaders({
      'authorId': 5
    })
    authReq = req.clone({headers});

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }

}
