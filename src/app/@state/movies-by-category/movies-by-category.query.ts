import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IMovieListByCategory } from '@model/site.model';
import { MoviesByCategoryState, MoviesByCategoryStore } from './movies-by-category.store';

@Injectable({ providedIn: 'root' })
export class MoviesByCategoryQuery extends QueryEntity<MoviesByCategoryState> {
  selectAll$ = this.selectAll();

  allMoviesByCategory = this.getAll();
  constructor(protected store: MoviesByCategoryStore) {
    super(store);
  }

  getAllMoviesByCategory(): IMovieListByCategory[] {
    return this.getAll();
  }
}
