import { Component, computed, effect, EventEmitter, inject, input, Input, OnChanges, OnInit, output, Output, SimpleChanges } from '@angular/core';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
//  implements OnInit, OnChanges
export class MovieListComponent{
  // @Output() onMovieClick = new EventEmitter<Movie>();
  onMovieClick = output<Movie>({
    alias: 'movieClick'
  });

  //@Input() searchTerm!: string;

  searchTerm = input.required({
    transform: (value: string) => value.toLocaleLowerCase(),
    alias: 'searchInput'
  })

  // movies: Movie[] = [];
  // filteredMovies: Movie[] = [];

  movieService = inject(MovieService)

  filteredMoviesSignal = computed(() => this.movieService.getMoviesSignal()
  .filter(movie => movie.title.toLocaleLowerCase().includes(this.searchTerm())))

  constructor() {
   //  effect(() => this.onMovieClick.emit(movie))
  }
// import {outputToObservable} from '@angular/core/rxjs-interop';
  public handleMovieClick(movie: Movie) : void {
    this.onMovieClick.emit(movie)
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //  if(changes['searchTerm'].currentValue) {
  //   this.filteredMovies = this.movies.filter(movie =>
  //     movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  //  }
  // }

  // ngOnInit() {
  //   this.movieService.getMovies().subscribe(movies => {
  //     this.movies = movies;
  //     this.filteredMovies = movies;
  //   });
  // }


}
