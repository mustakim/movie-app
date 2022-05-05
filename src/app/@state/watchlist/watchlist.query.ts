import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IMovie, IWatchlistMovie } from '@model/site.model';
import { Observable } from 'rxjs';
import { WatchlistState, WatchlistStore } from './watchlist.store';

@Injectable({ providedIn: 'root' })
export class WatchlistQuery extends QueryEntity<WatchlistState> {
  selectAll$ = this.selectAll();

  allWatchlist = this.getAll();
  constructor(protected store: WatchlistStore) {
    super(store);
  }

  getAllWatchlist(): IWatchlistMovie[] {
    return this.getAll();
  }

  isAvailableInWatchlist(movieId: number): boolean {
    if (this.allWatchlist?.length) {
      const watchList = this.allWatchlist.find(watchlist => watchlist.id === movieId);
      return watchList ? true : false;
    }
    return false;
  }
}
