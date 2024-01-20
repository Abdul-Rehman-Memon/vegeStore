import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private url: string = `${environment.baseApi}/vegeStore/api/v1/`;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const apiUrl = `${this.url}/${req.url}`;
    const parsedApiUrl = apiUrl.replace("///", "/").replace("//", "/");

    req = req.clone({
      url: parsedApiUrl,
    });

    return next.handle(req);
  }
}
