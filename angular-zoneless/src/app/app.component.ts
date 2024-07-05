import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-zoneless';

  count = 1;
  // Example 1
  // Property set in an event handler
  onCountClick() {
    this.count++;
  }

  date = new Date();
  // Example 2
  // Property updated in a setInterval event handler
  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    });
  }

}
