import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

export function injectDataService() {
  return inject(UserService);
}

export function fetchData() {
  const dataService = inject(UserService);
  return dataService.getUsers().pipe(map(users => users as any[]))
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

 // constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
