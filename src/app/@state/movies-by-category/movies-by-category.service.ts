import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { IMovieListByCategory } from '@model/site.model';
import { MoviesByCategoryStore } from './movies-by-category.store';
import { MoviesByCategoryQuery } from './movies-by-category.query';

@Injectable({ providedIn: 'root' })
export class MoviesByCategoryService {
  constructor(
    private moviesByCategoryStore: MoviesByCategoryStore,
    private moviesByCategoryQuery: MoviesByCategoryQuery
  ) { }

  getMoviesListByCategory(id: ID) {
    if (this.moviesByCategoryQuery.hasEntity(id)) {
      return this.moviesByCategoryQuery.selectEntity(id);
    }
  }

  add(category: IMovieListByCategory) {
    this.moviesByCategoryStore.add(category);
  }

  update(id, category: Partial<IMovieListByCategory>) {
    this.moviesByCategoryStore.upsert(id, category);
  }

  remove(id: any) {
    this.moviesByCategoryStore.remove(parseInt(id));
  }
}
