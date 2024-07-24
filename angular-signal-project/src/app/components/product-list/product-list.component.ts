import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatListModule, MatGridListModule, MatButtonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  constructor(public productService: ProductService) { }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }
}
