import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = signal<Product[]>([
    { id: 1, name: 'Stylish Watch', price: 99.99, imageUrl: 'assets/images/watch.png' },
    { id: 2, name: 'Wireless Earbuds', price: 129.99, imageUrl: 'assets/images/earbud.png' },
    { id: 3, name: 'Smart Speaker', price: 79.99, imageUrl: 'assets/images/speaker.jpg' },
    { id: 4, name: 'Fitness Tracker', price: 49.99, imageUrl: 'assets/images/tracker.jpg' },
  ])
  private cart = signal<CartItem[]>([]);
  getProducts = computed(() => this.products());
  getCart = computed(() => this.cart());

  addToCart(product: Product) {
    // set, update
    this.cart.update(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  }

  updateQuantity(productId: number, quantity: number) {
    this.cart.update(prevCart => prevCart.map(item => item.product.id === productId ? {...item, quantity} : item));
  }

  removeFromCart(productId: number) {
    this.cart.update(prevCart => prevCart.filter(item => item.product.id!== productId));
  }

  getCartItemsCount = computed(() => this.cart().reduce((acc, item) => acc + item.quantity, 0))
}