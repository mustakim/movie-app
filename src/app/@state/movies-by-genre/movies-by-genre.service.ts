import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { IGenre, IMovieListByGenre } from '@model/site.model';
import { MoviesByGenreStore } from './movies-by-genre.store';
import { MoviesByGenreQuery } from './movies-by-genre.query';

@Injectable({ providedIn: 'root' })
export class MoviesByGenreService {
  constructor(
    private moviesByGenreStore: MoviesByGenreStore,
    private moviesByGenreQuery: MoviesByGenreQuery
  ) { }

  getMoviesListByGenre(id: ID) {
    if (this.moviesByGenreQuery.hasEntity(id)) {
      return this.moviesByGenreQuery.selectEntity(id);
    }
  }

  add(genre: IMovieListByGenre) {
    this.moviesByGenreStore.add(genre);
  }

  update(id, genre: Partial<IMovieListByGenre>) {
    this.moviesByGenreStore.upsert(id, genre);
  }

  remove(id: any) {
    this.moviesByGenreStore.remove(parseInt(id));
  }
}
