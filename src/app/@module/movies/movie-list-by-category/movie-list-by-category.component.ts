import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { EnumMovieCategory } from '@lib/site.enums';
import { ICategory, IMovie, IMovieListByCategory } from '@model/site.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TmdbService } from '@services/tmdb.service';
import { MoviesByCategoryService } from '@state/movies-by-category/movies-by-category.service';

@UntilDestroy()
@Component({
  selector: 'app-movie-list-by-category',
  templateUrl: './movie-list-by-category.component.html',
  styleUrls: ['./movie-list-by-category.component.css']
})
export class MoviesListByCategoryComponent implements OnInit {
  id: string;
  moviesByCategory: IMovieListByCategory;
  movieId: string;
  isMovieDetails: boolean = false;
  currentPage: number = 1;

  constructor(
    private router: ActivatedRoute,
    private tmdbService: TmdbService,
    private moviesByCategoryService: MoviesByCategoryService
  ) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = params["id"];
      if (this.id && (this.id !== EnumMovieCategory.TOP_RATED && this.id !== EnumMovieCategory.TRENDING && this.id !== EnumMovieCategory.UPCOMING)) {
        this.isMovieDetails = true;
        this.movieId = this.id;
      } else {
        if (this.id === EnumMovieCategory.TRENDING) {
          this.getTrendingMovies(1);
        } else if (this.id === EnumMovieCategory.TOP_RATED) {
          this.getTopRatedMovies(1);
        } else if (this.id === EnumMovieCategory.UPCOMING) {
          this.getUpcomingMovies(1);
        }
      }
    });
  }

  onPageChange(pageNumber) {
    this.currentPage = pageNumber;
    if (this.id === EnumMovieCategory.TRENDING) {
      this.getTrendingMovies(pageNumber);
    } else if (this.id === EnumMovieCategory.TOP_RATED) {
      this.getTopRatedMovies(pageNumber);
    } else if (this.id === EnumMovieCategory.UPCOMING) {
      this.getUpcomingMovies(pageNumber);
    }
  }

  getTrendingMovies(pageNumber: number) {
    this.tmdbService
      .getTrendingMovies(pageNumber)
      .pipe()
      .subscribe((res: any) => {
        this.moviesByCategory = {
          id: EnumMovieCategory.TRENDING,
          movies: res.results,
          total_pages: res.total_pages,
          total_results: res.total_results
        }
      });
  }
  getTopRatedMovies(pageNumber: number) {
    this.tmdbService
      .getTopRatedMovies(pageNumber)
      .pipe()
      .subscribe((res: any) => {
        this.moviesByCategory = {
          id: EnumMovieCategory.TRENDING,
          movies: res.results,
          total_pages: res.total_pages,
          total_results: res.total_results
        }
      });
  }
  getUpcomingMovies(pageNumber: number) {
    this.tmdbService
      .getUpcomingMovies(pageNumber)
      .pipe()
      .subscribe((res: any) => {
        this.moviesByCategory = {
          id: EnumMovieCategory.TRENDING,
          movies: res.results,
          total_pages: res.total_pages,
          total_results: res.total_results
        }
      });
  }
}
