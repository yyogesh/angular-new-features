import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-signal';
  
  count = 1;
  price = 100;

  quantity = signal(10);

  colors = signal<string[]>(["Red", "Green", "Yellow", "Blue"])

  computedPrice = computed(() => this.quantity() * this.count)
  
  
  constructor() {
    let a = 10;
    let b = 20;
    let sum = a + b;
    a = 40;
    console.log('Sum after modification:', sum); // Outputs: 30

    this.quantity.set(100)
    this.quantity.set(200)
    this.quantity.set(1000)

    effect(() => console.log('Total quantity:', this.quantity()));
    // ko.observable()
  }

  get productPrice(): number {
    return this.price * this.count;
  }

  incrementCount() {
    this.count++;
    this.quantity.update(value => value + 1);
  }
}
