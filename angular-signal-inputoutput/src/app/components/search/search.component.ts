import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie, MovieService } from '../../services/movie.service';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MovieListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm: string = '';
  selectedMovie!: Movie;

  onMovieSelection(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
