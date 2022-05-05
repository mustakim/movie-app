import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IMovieListByCategory, IMovieListByGenre } from '@model/site.model';
import { TmdbService } from '@services/tmdb.service';
import { Router } from '@angular/router';
import { MoviesByCategoryService } from '@state/movies-by-category/movies-by-category.service';
import { MoviesByCategoryQuery } from '@state/movies-by-category/movies-by-category.query';
@UntilDestroy()
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  moviesByGenre: IMovieListByGenre[] = [];
  moviesByCategory: IMovieListByCategory[] = [];


  constructor(private router: Router, private tmdbService: TmdbService, private moviesByCategoryQuery: MoviesByCategoryQuery) { }

  filterSettings = {
    sort_by: 'popularity.desc',
    with_genres: 0
  };

  ngOnInit(): void {
    this.getMoviesCatgory();
  }


  getMoviesCatgory() {
    // getting from store
    this.moviesByCategoryQuery.selectAll$.subscribe((res) => {
      this.moviesByCategory = res;
    })
  }

  redirectingToCategoryPage(moviesCategory: IMovieListByGenre) {
    this.router.navigate(['movies/' + moviesCategory.id])
  }

  ngOnDestroy(): void {

  }
}
