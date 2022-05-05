import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieWatchlistRoutingModule } from './movie-watchlist-routing.module';
import { MovieWatchlistComponent } from './movie-watchlist.component';
import { SharedModule } from '@shared/shared.module';
import { MoviesModule } from '@module/movies/movies.module';

@NgModule({
  declarations: [
    MovieWatchlistComponent,

  ],
  imports: [MovieWatchlistRoutingModule, CommonModule, SharedModule, MoviesModule],
  exports: []
})
export class MovieWatchlistModule { }
