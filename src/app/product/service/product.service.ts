import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  //api to get all products
  getAllProduct()
  {
    return this.http.get('http://localhost:3000/products')
  }
  //api to get single product
  getProduct(pid:any)
  {
    return this.http.get('http://localhost:3000/products/'+pid)
  }
}
