import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGenre, IMovie, IMovieDetails, IMovieListByGenre } from '@model/site.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TmdbService } from '@services/tmdb.service';
import { MoviesByGenreService } from '@state/movies-by-genre/movies-by-genre.service';
import { WatchlistQuery } from '@state/watchlist/watchlist.query';
import { WatchlistService } from '@state/watchlist/watchlist.service';

@UntilDestroy()
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieId: number;
  movie: IMovieDetails;
  similarMovies: IMovie[] = [];
  isAvailableInWatchList: boolean;
  isTrailerOpen: boolean;

  constructor(private tmdbService: TmdbService, private watchlistService: WatchlistService, private router: ActivatedRoute, private watchListQuery: WatchlistQuery) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.movieId = parseInt(params["id"]);
    })
    this.getMovieDetails();
    this.isAvailableInWatchList = this.watchListQuery.isAvailableInWatchlist(this.movieId);
  }

  getMovieDetails() {
    this.tmdbService
      .getMovieDetails(this.movieId)
      .pipe()
      .subscribe((res: any) => {
        this.movie = res;


        //
        this.tmdbService.getSimilarMovies(this.movieId)
          .pipe()
          .subscribe((eRes: any) => {
            this.similarMovies = eRes.results;
            if (this.similarMovies?.length) {
              this.similarMovies = this.similarMovies.map(obj => ({ ...obj, isSimilarMovies: true }))
            }
          });
      });
  }

  addToWatchlist() {
    if (!this.isAvailableInWatchList) {
      let genreIds: number[] = this.movie.genres.map(genre => genre.id);
      const movie: IMovie = this.movie;
      movie.genre_ids = genreIds;
      this.watchlistService.add({ id: movie.id, movie: movie });
      this.isAvailableInWatchList = true;
    } else {
      this.watchlistService.remove(this.movie.id);
      this.isAvailableInWatchList = false;
    }
  }
}
