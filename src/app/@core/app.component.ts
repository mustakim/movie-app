import { Component, OnInit } from '@angular/core';
import { EnumMovieCategory } from '@lib/site.enums';
import { UntilDestroy } from '@ngneat/until-destroy';
import { MoviesByCategoryService } from '@state/movies-by-category/movies-by-category.service';
import { of, switchMap } from 'rxjs';
import { IGenre, IMovieListByGenre } from '../@model/site.model';
import { TmdbService } from '../@services/tmdb.service';
import { MoviesByGenreService } from '../@state/movies-by-genre/movies-by-genre.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movie App';
  genres: IGenre[];
  filterSettings = {
    sort_by: 'popularity.desc',
    with_genres: 0
  };

  constructor(
    private tmdbService: TmdbService,
    private moviesByGenreService: MoviesByGenreService,
    private moviesByCategoryService: MoviesByCategoryService
  ) { }

  ngOnInit(): void {
    // getting movie genre list
    // this.getMoviesGenre();

    // get trending movies
    this.getTrendingMovies();
    // get top rated movies
    this.getTopRatedMovies();
    // get upcoming movies
    this.getUpcomingMovies();
  }

  getMoviesGenre() {
    this.tmdbService
      .getGenreList()
      .pipe()
      .subscribe((res: any) => {
        this.genres = res.genres;
        if (this.genres?.length) {
          this.genres.forEach((genre) => {
            this.getMoviesByGenre(genre);
          });
        }
      });
  }

  getMoviesByGenre(genre: IGenre) {
    this.filterSettings.with_genres = genre.id;
    this.tmdbService
      .getDiscoverMovie(this.filterSettings)
      .pipe()
      .subscribe((res: any) => {
        this.moviesByGenreService.add({ id: genre.id, genre: genre, movies: res.results })
      });
  }

  getTrendingMovies() {
    this.tmdbService
      .getTrendingMovies()
      .pipe()
      .subscribe((res: any) => {
        this.moviesByCategoryService.add({ id: EnumMovieCategory.TRENDING, movies: res.results, total_pages: res.total_pages, total_results: res.total_results })
      });
  }
  getTopRatedMovies() {
    this.tmdbService
      .getTopRatedMovies()
      .pipe()
      .subscribe((res: any) => {
        this.moviesByCategoryService.add({ id: EnumMovieCategory.TOP_RATED, movies: res.results, total_pages: res.total_pages, total_results: res.total_results })
      });
  }
  getUpcomingMovies() {
    this.tmdbService
      .getUpcomingMovies()
      .pipe()
      .subscribe((res: any) => {
        this.moviesByCategoryService.add({ id: EnumMovieCategory.UPCOMING, movies: res.results, total_pages: res.total_pages, total_results: res.total_results })
      });
  }
}
