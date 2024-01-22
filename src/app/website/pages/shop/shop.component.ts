import { Component, getPlatform } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { formateFilter } from "src/app/shared/functions";
import { StoreService } from "src/app/website/service/store/store.service";
import { AlertService } from "../../service/alert/alert.service";
import { StorageService } from "../../service/toaster/storage.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss"],
})
export class ShopComponent {
  cart: any = [];
  filterForm: FormBuilder | any;
  totalPrice: number = 0;
  products: any = [];

  constructor(
    private store: StoreService,
    private formbuilder: FormBuilder,
    private alert: AlertService,
    private storage: StorageService,
  ) {}

  ngOnInit() {
    this.initfiter();
    this.getProducts();
  }

  initfiter() {
    this.filterForm = this.formbuilder.group({
      title: [""],
      price: [""],
    });
  }

  submit() {
    this.getProducts();
  }

  async getProducts() {
    let filters = this.filterForm.value;
    filters = formateFilter(filters);
    this.products = (await this.store.getProducts(filters)).map((d: any) => {
      return {
        id: d.id,
        thumbnail: d.thumbnail,
        title: d.title,
        price: d.price,
        quantity: 1,
        kgs: "1kg",
      };
    });
  }

  updateQuantity(product: any, sign: string) {
    this.products = this.products.map((d: any) => {
      console.log(d.id, product.id);
      if (d.id === product.id) {
        const updatedProdct = {
          ...d,
          quantity: sign === "+" ? +d.quantity + 1 : +d.quantity - 1,
        };
        if (updatedProdct.quantity > 0) {
          return updatedProdct;
        } else {
          console.log("can't be less than 0");
          return {
            ...d,
            quantity: 1,
          };
        }
      } else {
        return d;
      }
    });
  }

  addtoCart(product: any) {
    this.cart.push({
      ...product,
      totalPrice: +product.price * +product.quantity,
    });

    this.totalPrice = this.cart.reduce(
      (acc: any, d: any) => acc + d.totalPrice,
      0,
    );
  }

  removeFromCart(cartItem: any) {
    this.cart = this.cart.filter((d: any) => {
      if (d.id === cartItem.id) {
        this.totalPrice = this.totalPrice - d.totalPrice;
      }
      return d.id !== cartItem.id;
    });
  }

  clearCart() {
    this.cart = [];
  }

  checkout() {
    const token = this.storage.getToken();
    if (!token) {
      this.alert.alert();

      return;
    } else {
      console.log(this.cart);
    }
  }

  addProduct() {
    const token = this.storage.getToken();
    if (!token) {
      this.alert.alert();

      return;
    } else {
    }
  }
}
