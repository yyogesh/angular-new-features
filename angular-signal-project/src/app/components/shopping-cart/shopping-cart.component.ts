import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatIconModule, MatListModule, MatInputModule, MatButtonModule ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  constructor(public productService: ProductService) {}

  getTotal() {
    return this.productService.getCart().reduce((total, item) => total + (item.quantity * item.product.price), 0);
  }

  updateQuantity(productId: number, event: Event) {
    const quantity = parseInt((event.target as HTMLInputElement).value, 10);
    this.productService.updateQuantity(productId, quantity);
  }

  removeFromCart(productId: number) {
    this.productService.removeFromCart(productId);
  }
}
