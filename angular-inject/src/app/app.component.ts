import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService, fetchData } from './service/user.service';
import { AsyncPipe } from '@angular/common';
//private userService = inject(UserService);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-inject';
  users = [];

  private userService = inject(UserService);

  users$ = fetchData();

  constructor() {
   // fetchData(); // Call the fetchData function when the component is initialized
  }

  ngOnInit(): void {
    this.getUser();
  //  fetchData();
  }

  getUser() {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users
    });
  }
}
