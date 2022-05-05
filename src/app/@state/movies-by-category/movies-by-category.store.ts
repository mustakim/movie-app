import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IMovieListByCategory } from '@model/site.model';

export interface MoviesByCategoryState extends EntityState<IMovieListByCategory> { }

export function createInitialState(): MoviesByCategoryState {
  return {
    id: '',
    movies: [],
    total_pages: 0,
    total_results: 0
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'MoviesByCategory' })
export class MoviesByCategoryStore extends EntityStore<MoviesByCategoryState> {
  constructor() {
    super(createInitialState);
  }
}
