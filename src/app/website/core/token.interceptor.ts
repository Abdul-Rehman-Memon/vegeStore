import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  token: any;
  req: any;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> | any {
    // try {
    this.token = sessionStorage.getItem("token");
    if (!this.token) {
      return next.handle(request);
    }
    if (this.token) {
      this.req = request.clone({
        headers: request.headers.set("Authorization", this.token),
        url: request.url,
      });
      return next.handle(this.req).pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = "";
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // Server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          // this.toaster.error(errorMessage);
          return throwError(() => new Error(errorMessage));
        }),
      );
    }
  }
}
