import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProduct, ProductCategory } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "https://dummyjson.com/products";

  constructor( private _httpClient: HttpClient ) { 

  }

  public getAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<any>(`${this.baseUrl}?limit=8`).pipe(
      map(res => res.products)
    );
  }

  public getProductById(id: number | string): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  public getProductByCategory(category: number | string): Observable<IProduct> {
    return this._httpClient.get<any>(`${this.baseUrl}/category/${category}`).pipe(
      map(res => res.products)
    );
  }

  public getAllCategories(): Observable<ProductCategory[]> {
    return this._httpClient.get<ProductCategory[]>(`${this.baseUrl}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(this.baseUrl, product);
  }

  public updateProduct(id: number | string, product: IProduct): Observable<IProduct> {
    return this._httpClient.put<IProduct>(`${this.baseUrl}/${id}`, product);
  }

  public deleteProduct(id: number | string): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(`${this.baseUrl}/${id}`);
  }
}
