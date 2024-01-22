import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpService } from "../httpService/http.service";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private http: HttpService) {}

  async getProducts(payload?: any) {
    const data = this.http.createHttpParams(payload);
    return await this.http.get("product", data);
  }

  async updateProducts(payload: any) {
    return await this.http.put("product", payload);
  }

  async deleteProducts(payload: any) {
    return await this.http.delete("product", payload);
  }

  async addProducts(payload: any) {
    return await this.http.post("product", payload);
  }
}
