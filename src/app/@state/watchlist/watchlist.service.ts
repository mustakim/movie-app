import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { WatchlistStore } from './watchlist.store';
import { WatchlistQuery } from './watchlist.query';
import { IMovie, IWatchlistMovie } from '@model/site.model';

@Injectable({ providedIn: 'root' })
export class WatchlistService {
  constructor(
    private watchlistStore: WatchlistStore,
    private watchlistQuery: WatchlistQuery,
  ) { }

  getWatchlist(id: ID) {
    if (this.watchlistQuery.hasEntity(id)) {
      return this.watchlistQuery.selectEntity(id);
    }
  }

  add(movie: IWatchlistMovie) {
    this.watchlistStore.add(movie);
  }

  update(id, genre: Partial<IMovie>) {
    this.watchlistStore.upsert(id, genre);
  }

  remove(id: any) {
    this.watchlistStore.remove(parseInt(id));
  }
}
