import { FormBuilder } from "@angular/forms";
import { StoreService } from "./../../service/store/store.service";
import { Component } from "@angular/core";
import { formateFilter } from "src/app/shared/functions";

declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  filterForm: FormBuilder | any;

  products: any = [
    {
      thubnail: "assets/img/product/product-1.jpg",
      title: "Strawberry",
      price: "10",
    },
    {
      thubnail: "assets/img/product/product-1.jpg",
      title: "Strawberry",
      price: "10",
    },
    {
      thubnail: "assets/img/product/product-1.jpg",
      title: "Strawberry",
      price: "10",
    },
    {
      thubnail: "assets/img/product/product-1.jpg",
      title: "Strawberry",
      price: "10",
    },
  ];

  constructor(private store: StoreService, private formbuilder: FormBuilder) {}

  // when page is loaded, this function is called
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
    this.products = await this.store.getProducts(filters);
  }
}
