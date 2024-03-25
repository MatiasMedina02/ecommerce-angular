import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel-principal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carousel-principal.component.html',
  styleUrl: './carousel-principal.component.css'
})
export class CarouselPrincipalComponent implements OnInit {
  phonesList: IProduct[] = [];

  constructor ( private _apiSevice: ApiService ){

  }

  ngOnInit(): void {
    this._apiSevice.getProductByCategory("smartphones").subscribe({
      next: (data: IProduct[] | any) => {
        this.phonesList = data;
      },
      error(err: any) {
        console.error(err);
      },
    })
  }
}
