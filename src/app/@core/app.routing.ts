import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  {
    path: "movies",
    loadChildren: () =>
      import("../@module/movies/movies.module").then((m) => m.MoviesModule),
  },
  {
    path: "watchlist",
    loadChildren: () =>
      import("../@module/movie-watchlist/movie-watchlist.module").then((m) => m.MovieWatchlistModule),
  },
  {
    path: "",
    redirectTo: "movies",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "movies",
  },
];
