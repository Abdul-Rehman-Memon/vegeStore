import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularHttpOptions } from "src/app/shared/interface";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor() {}

  createHttpParams(params?: { [paramName: string]: any }): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key: string) => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.append(key, params[key].toString());
        }
      });
    }
    return httpParams;
  }

  createParams(params?: { [paramName: string]: any }): AngularHttpOptions {
    return {
      params: this.createHttpParams(params),
    };
  }
}
