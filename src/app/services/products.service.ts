import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrdersData } from '../models/orders-data.interface';
import { ProductsData } from '../models/products-data.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public listOfProducts = new BehaviorSubject<any>([]);
 public  cartItems: any = [];

  constructor(private http:HttpClient) { }

  getProducts(): Observable<ProductsData[]> {
    // http call to retrieve list of products
    return this.http.get<ProductsData[]>('/assets/product-data.json')
  }

  pushItemstoCart(cartproduct:any){
this.cartItems.push(...cartproduct);
this.listOfProducts.next(cartproduct);
  }
setItemsForCart(cartproduct:any)
{
  this.cartItems.push(...cartproduct);
  this.listOfProducts.next(this.cartItems);
}
getItemsForCart(){
  return this.listOfProducts.asObservable();
}
  getOrderData(): Observable<OrdersData[]> {
    // http call to retrieve list of orders
    return this.http.get<OrdersData[]>('/assets/order-data.json')
  }

  clearCart() {
    this.cartItems = [];
  }
}
