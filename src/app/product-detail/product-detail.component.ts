import { CurrencyPipe, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
// import { Product, productList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgFor],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product?: IProduct;
  loading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {

  }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProductById(params["productId"]).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.loading = false;
          },
          error: (err: any) => {
            console.error(err);
            this.loading = false;
          }
        });
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }
}
