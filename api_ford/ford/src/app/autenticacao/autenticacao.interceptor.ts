

import { TokenService } from './token.service';
import { Injectable, Injector, Type } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';

// * @description
// *
// // * Interceptor que pega a requisição html e insere no header o token.
// // */

// @Injectable({
//  providedIn: 'root',
// })
// export class AutenticacaoInteceptor implements HttpInterceptor {
//  constructor(private injector: Injector) {}

//  intercept(
//    original_request: HttpRequest<any>,
//    next: HttpHandler
//  ): Observable<HttpEvent<any>> {
//    let requestResult: HttpRequest<any>;
//    if (this.isUrlNeedsProAuth(original_request.url)) {
//      requestResult = this.appendTokenToRequest(original_request);
//    } else {
//      requestResult = original_request.clone();
//    }
//    return next.handle(requestResult);
//  }

//  appendTokenToRequest(request: HttpRequest<any>): HttpRequest<any> {
//    const authService: AutenticacaoService = this.injector.get<
//    AutenticacaoService
//    >(AutenticacaoService as Type<AutenticacaoService>);
//    const token = authService.getAuthenticatedUser().token;
//    return request.clone({
//      headers: request.headers.set('x-access-token', token),
//    });
//  }

//  isUrlNeedsProAuth(url: string): boolean {
//    let needProAuth = true;
//    const whiteList = [/login/, /assets/];

//    for (const whiteUrl of whiteList) {
//      if (url.search(whiteUrl) >= 0) {
//        needProAuth = false;
//        break;
//      }
//    }
//    return needProAuth;
//  }
// }


@Injectable()
export class AutenticacaoInteceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService) {}

  intercept
  (request: HttpRequest<unknown>,
    next: HttpHandler): Observable<HttpEvent<unknown>> {

      if(this.tokenService.possuiToken()){
        const token = this.tokenService.retornaToken();
        const headers = new HttpHeaders().append('x-access-token', token)
        request = request.clone({headers});
      }
    return next.handle(request);
  }
}
