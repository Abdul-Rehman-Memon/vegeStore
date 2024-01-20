import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }


  getAllProducts = (page = 1, limit = 9) => {
    return this.http.get(`${environment.baseApi}/products?_page=${page}&_limit=${limit}`);
  }

  getProductById = (id: number) => {
    return this.http.get(`${environment.baseApi}/products/${id}`);
  }

  getCategories = () => {
    return this.http.get(`${environment.baseApi}/categories`);
  }

  getProductsByCategory = (category: string) => {
    return this.http.get(`${environment.baseApi}/category/${category}`);
  }

  getProductsBySearch = (search: string) => {
    return this.http.get(`${environment.baseApi}/products/search/${search}`);
  }

  getProductsByPrice = (min: number, max: number) => {
    return this.http.get(`${environment.baseApi}/products/price/${min}/${max}`);
  }

  getProductsByRating = (rating: number) => {
    return this.http.get(`${environment.baseApi}/products/rating/${rating}`);
  }

  getProductsByDiscount = (discount: number) => {
    return this.http.get(`${environment.baseApi}/products/discount/${discount}`);
  }
}
