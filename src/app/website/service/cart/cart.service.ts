import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  // Use BehaviorSubject with an initial value
  private cartSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  cart$ = this.cartSubject.asObservable();
  cart: any = [];

  totalQuantity: any = 0;
  totalPrice: any = 0;

  badge: any;

  constructor() {
    this.badge = this.cart.length;
  }

  // Use this method to update the cart and notify subscribers
  updateCart(payload: any) {
    this.cartSubject.next(payload);
  }

  // Use this method to get the current cart value
  getCart() {
    return this.cartSubject.value;
  }
}
