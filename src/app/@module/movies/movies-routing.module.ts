import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListByCategoryComponent } from './movie-list-by-category/movie-list-by-category.component';
import { MoviesListByGenreComponent } from './movie-list-by-genre/movie-list-by-genre.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: ':id',
    // component: MoviesListByGenreComponent
    component: MoviesListByCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
