import { Component } from "@angular/core";
import { AlertService } from "../../service/alert/alert.service";
import { StorageService } from "../../service/toaster/storage.service";
import { CartService } from "../../service/cart/cart.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  token: boolean | any;
  cart: any = [];
  totalQuantity: any = 0;
  totalPrice: any = 0;
  constructor(
    private alert: AlertService,
    private storage: StorageService,
    private cartService: CartService,
    private toaster: ToastrService,
  ) {}

  ngOnInit() {
    this.setToken();
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.cart;
    this.totalQuantity = this.cartService.totalQuantity;
    this.totalPrice = this.cartService.totalPrice;
  }
  setToken() {
    this.token = this.storage.getToken();
  }

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
    console.log("this.cart", this.cart);
    if (!this.token) {
      this.alert.alert();

      return;
    } else {
      if (this.cart.length == 0) {
        this.toaster.error("Please Add Product");
      }
      if (this.cart.length > 0) {
        this.toaster.success("Order Placed Sccessfully");
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.totalQuantity = 0;
    this.totalPrice = 0;
  }
}
