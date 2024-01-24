import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CartService } from "src/app/website/service/cart/cart.service";
import { ProfileService } from "src/app/website/service/profile/profile.service";
import { StorageService } from "src/app/website/service/toaster/storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  token: any;
  cartBadge: number = 0;

  constructor(
    private storage: StorageService,
    private auth: ProfileService,
    private cartService: CartService,
  ) {
    this.updateCart();
  }

  ngOnInit() {
    this.getToken();
  }

  ngOnDestroy() {
    // Unsubscribe from the cart subscription to avoid memory leaks
  }

  updateCart() {
    this.cartBadge = this.cartService.cart;
    console.log("this.cartBadge", this.cartBadge);
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
