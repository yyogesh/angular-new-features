import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './servies/user.service';
import { AsyncPipe } from '@angular/common';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
 // changeDetection: ChangeDetectionStrategy.OnPush, // Enable OnPush Change Detection for this component only
})
export class AppComponent implements OnInit {
  title = 'angular-zoneless';

  count = 1;
   // Example 1
  // Property set in an event handler
  onCountClick() {
    this.count++;
  }

  // Example 2
   // Property updated in a setInterval event handler
   date = new Date();
   cdr = inject(ChangeDetectorRef)
   users: User[] = []
  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
      this.cdr.markForCheck();
    });

    this.getUsers();
  }

  // Example 3
  userService = inject(UserService)
  users$ = this.userService.getUsers();

  // Example 4
  getUsers() {
    this.userService.getUsers().subscribe(users => {
      console.log('users', users) 
      this.users = users;
    })
  }

}
