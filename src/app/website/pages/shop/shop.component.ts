import { Component, getPlatform } from '@angular/core';
import { StoreService } from 'src/app/website/service/store/store.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products: any = []
  categories: any = []

  constructor(private store: StoreService) {
    console.log('ShopComponent constructor');
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts = () => {
    this.store.getAllProducts().subscribe((res: any) => {
      this.products = res;
    }, (err) => {
      console.log(err);
    });
  }

  getAllCategories = () => {
    this.store.getCategories().subscribe((res: any) => {
      this.categories = res;
      console.log(this.categories)
    }, (err) => {
      console.log(err);
    });
  }

}
