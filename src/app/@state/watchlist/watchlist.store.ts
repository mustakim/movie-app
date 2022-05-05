import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IMovie, IWatchlistMovie } from '@model/site.model';

export interface WatchlistState extends EntityState<IWatchlistMovie> { }

export function createInitialState(): WatchlistState {
  return {
    id: 0,
    movie: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Watchlist' })
export class WatchlistStore extends EntityStore<WatchlistState> {
  constructor() {
    super(createInitialState);
  }
}
