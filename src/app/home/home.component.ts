import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { CarouselPrincipalComponent } from "../carousel-principal/carousel-principal.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ProductsComponent, CarouselPrincipalComponent]
})
export class HomeComponent {

}
