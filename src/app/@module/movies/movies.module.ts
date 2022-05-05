import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListItemComponent } from './movies-list-item/movies-list-item.component';
import { MoviesListByGenreComponent } from './movie-list-by-genre/movie-list-by-genre.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SharedModule } from '@shared/shared.module';
import { MoviesListByCategoryComponent } from './movie-list-by-category/movie-list-by-category.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    MovieListComponent,
    MoviesListItemComponent,
    MoviesListByGenreComponent,
    MoviesListByCategoryComponent,
    MovieDetailsComponent
  ],
  imports: [MoviesRoutingModule, CommonModule, SharedModule, NgxPaginationModule],
  exports: [MoviesListItemComponent]
})
export class MoviesModule { }
