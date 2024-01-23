import { Component } from "@angular/core";
import { AlertService } from "../../service/alert/alert.service";
import { StorageService } from "../../service/toaster/storage.service";
import { CartService } from "../../service/cart/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  token: boolean | any;
  cart: any;
  constructor(
    private alert: AlertService,
    private storage: StorageService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.setToken();
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.sendCart();
  }
  setToken() {
    this.token = this.storage.getToken();
  }

  totalQuantity: any;
  totalPrice: any;
  removeFromCart(cartItem: any) {
    this.cart = this.cart.filter((d: any) => {
      if (d.id === cartItem.id) {
        this.totalPrice = this.totalPrice - d.totalPrice;
        this.totalQuantity = this.totalQuantity - d.quantity;
      }
      return d.id !== cartItem.id;
    });
  }

  checkout() {
    if (!this.token) {
      this.alert.alert();

      return;
    } else {
      console.log(this.cart);
    }
  }

  clearCart() {
    this.cart = [];
    this.totalQuantity = 0;
    this.totalPrice = 0;
  }
}
