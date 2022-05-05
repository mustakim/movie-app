import { Component, OnInit } from '@angular/core';
import { IMovie, IWatchlistMovie } from '@model/site.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { WatchlistQuery } from '@state/watchlist/watchlist.query';

@UntilDestroy()
@Component({
  selector: 'app-movie-watchlist',
  templateUrl: './movie-watchlist.component.html',
  styleUrls: ['./movie-watchlist.component.css']
})
export class MovieWatchlistComponent implements OnInit {
  watchListMovies: IWatchlistMovie[] = [];

  constructor(
    private watchlistQuery: WatchlistQuery
  ) {
  }

  ngOnInit() {
    this.getMoviesGenre();
  }

  getMoviesGenre() {
    // getting from store
    this.watchlistQuery.selectAll$.subscribe((res) => {
      this.watchListMovies = res;
    })
  }
}
