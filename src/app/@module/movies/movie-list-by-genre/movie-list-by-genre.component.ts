import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { IGenre, IMovie, IMovieListByGenre } from '@model/site.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { MoviesByGenreService } from '@state/movies-by-genre/movies-by-genre.service';

@UntilDestroy()
@Component({
  selector: 'app-movie-list-by-genre',
  templateUrl: './movie-list-by-genre.component.html',
  styleUrls: ['./movie-list-by-genre.component.css']
})
export class MoviesListByGenreComponent implements OnInit {
  id: number;
  moviesByGenre: IMovieListByGenre;
  movieId: number;
  isMovieDetails: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private moviesByGenreService: MoviesByGenreService
  ) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = parseInt(params["id"]);
      const stringId = this.id.toString();
      if (stringId && stringId.length > 5) {
        this.isMovieDetails = true;
        this.movieId = this.id;
      } else {
        this.moviesByGenreService.getMoviesListByGenre(this.id)
          .subscribe((movieListByGenre) => {
            this.moviesByGenre = movieListByGenre;
          })
      }
    });
  }
}
