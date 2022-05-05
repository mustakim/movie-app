import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IMovieListByGenre } from '@model/site.model';
import { MoviesByGenreState, MoviesByGenreStore } from './movies-by-genre.store';

@Injectable({ providedIn: 'root' })
export class MoviesByGenreQuery extends QueryEntity<MoviesByGenreState> {
  selectAll$ = this.selectAll();

  allMoviesByGenre = this.getAll();
  constructor(protected store: MoviesByGenreStore) {
    super(store);
  }

  getAllMoviesByGenre(): IMovieListByGenre[] {
    return this.getAll();
  }
}
