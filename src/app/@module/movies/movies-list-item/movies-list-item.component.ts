import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IGenre, IMovie } from '@model/site.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { WatchlistQuery } from '@state/watchlist/watchlist.query';
import { WatchlistService } from '@state/watchlist/watchlist.service';

@UntilDestroy()
@Component({
  selector: 'app-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.css']
})
export class MoviesListItemComponent implements OnInit {
  @Input() movie: IMovie;
  isAvailableInWatchList: boolean;

  constructor(private router: Router, private watchlistService: WatchlistService, private watchListQuery: WatchlistQuery) { }

  ngOnInit() {
    this.isAvailableInWatchList = this.watchListQuery.isAvailableInWatchlist(this.movie.id);
  }

  redirectingToMovieDetails(movie: IMovie) {
    if (!movie?.isSimilarMovies)
      this.router.navigate(['movies/' + movie.id]);
  }

  addToWatchlist(movie: IMovie) {
    if (!this.isAvailableInWatchList) {
      this.watchlistService.add({ id: movie.id, movie: movie });
      this.isAvailableInWatchList = true;
    } else {
      this.watchlistService.remove(this.movie.id);
      this.isAvailableInWatchList = false;
    }
  }
}
