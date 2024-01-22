import { Component } from "@angular/core";
import { ProfileService } from "src/app/website/service/profile/profile.service";
import { StorageService } from "src/app/website/service/toaster/storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  token: any;
  constructor(private storage: StorageService, private auth: ProfileService) {}

  ngOnInit() {
    this.getToken();
  }
  getToken() {
    this.token = this.storage.getToken();
    console.log({ token: this.token });
  }
  signout() {
    const id = this.storage.getInStorage("user").id;
    this.auth.signOut({ id });
    this.storage.removeInStorage("user");
    window.location.reload();
  }
}
