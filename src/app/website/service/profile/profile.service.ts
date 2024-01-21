import { Injectable } from "@angular/core";
import { HttpService } from "../httpService/http.service";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(private http: HttpService) {}

  async signup(payload: any) {
    const data = this.http.createHttpParams(payload);
    return await this.http.post("auth/signup", data);
  }

  async signIn(payload: any) {
    const data = this.http.createHttpParams(payload);
    return await this.http.post("auth/signin", data);
  }

  async signOut(payload: any) {
    const data = this.http.createHttpParams(payload);
    return await this.http.put("auth/signout", data);
  }

}
