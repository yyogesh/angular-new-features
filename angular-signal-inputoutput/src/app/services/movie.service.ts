// movie.service.ts
import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'The Shawshank Redemption', year: 1994 },
    { id: 3, title: 'The Dark Knight', year: 2008 },
    { id: 4, title: 'Pulp Fiction', year: 1994 },
    { id: 5, title: 'Forrest Gump', year: 1994 },
    // Add more movies as needed
  ];

  getMoviesSignal = signal(this.movies);

  getMovies(): Observable<Movie[]> {
    // Simulating an HTTP request
    return of(this.movies);
  }
}