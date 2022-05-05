import { Component, OnInit } from '@angular/core';
import { EnumMovieCategory } from '@lib/site.enums';
import { UntilDestroy } from '@ngneat/until-destroy';
import { MoviesByCategoryService } from '@state/movies-by-category/movies-by-category.service';
import { IGenre } from '../@model/site.model';
import { TmdbService } from '../@services/tmdb.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movie App';
  filterSettings = {
    sort_by: 'popularity.desc',
  };

  constructor(
    private tmdbService: TmdbService,
    private moviesByCategoryService: MoviesByCategoryService
  ) { }

  ngOnInit(): void {
    // getting movies genres
    this.getMoviesGenre();
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
        if (res?.genres?.length)
          localStorage.setItem('genres', JSON.stringify(res?.genres))
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
