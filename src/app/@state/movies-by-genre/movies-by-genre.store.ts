import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IGenre, IMovieListByGenre } from '@model/site.model';

export interface MoviesByGenreState extends EntityState<IMovieListByGenre> { }

export function createInitialState(): MoviesByGenreState {
  return {
    id: 0,
    genre: null,
    movies: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'MoviesByGenre' })
export class MoviesByGenreStore extends EntityStore<MoviesByGenreState> {
  constructor() {
    super(createInitialState);
  }
}
