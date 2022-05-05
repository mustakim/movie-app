import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TMDB_API_CONSTANT } from '@lib/api.constant';
import { Observable } from 'rxjs';
import { IDiscoverPageContent, IMovie, IMovieDetails, ISelectOption } from '@model/site.model';

export const TMDB_SORTING_OPTIONS: ISelectOption[] = [
  {
    label: 'Popularity Descending',
    value: 'popularity.desc'
  },
  {
    label: 'Popularity Ascending',
    value: 'popularity.asc'
  }
];

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private _BASE_URL = environment.tmdb.baseUrl;
  private _API_KEY = environment.tmdb.apiKey;

  constructor(private httpClient: HttpClient) { }

  private UrlBuilder(endpoint: string, params?: object): string {
    const queryParams = params
      ? Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&')
      : '';
    return `${this._BASE_URL}${endpoint}?api_key=${this._API_KEY}&${queryParams}`;
  }

  getGenreList() {
    return this.httpClient.get(this.UrlBuilder(TMDB_API_CONSTANT.GENRE_MOVIE_LIST));
  }

  getDiscoverMovie(params: any): Observable<IDiscoverPageContent<IMovie>> {
    return this.httpClient.get<IDiscoverPageContent<IMovie>>(this.UrlBuilder(TMDB_API_CONSTANT.DISCOVER_MOVIE, params));
  }

  getMovieDetails(id: number): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(
      `${this._BASE_URL}${TMDB_API_CONSTANT.MOVIE}${id}?api_key=${this._API_KEY}&append_to_response=credits,videos,images`
    );
  }

  getSimilarMovies(id: number): Observable<IDiscoverPageContent<IMovie>> {
    return this.httpClient.get<IDiscoverPageContent<IMovie>>(
      `${this._BASE_URL}${TMDB_API_CONSTANT.MOVIE}${id}${TMDB_API_CONSTANT.SIMILAR}?api_key=${this._API_KEY}`
    );
  }

  getTrendingMovies(pageNumber?: number): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(
      `${this._BASE_URL}${TMDB_API_CONSTANT.TRENDING}?api_key=${this._API_KEY}&append_to_response=credits,videos,images`
    );
  }

  getTopRatedMovies(pageNumber: number = 1): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(
      `${this._BASE_URL}${TMDB_API_CONSTANT.TOP_RATED_MOVIES}?api_key=${this._API_KEY}&language=en-US&append_to_response=credits,videos,images&page=${pageNumber}`
    );
  }

  getUpcomingMovies(pageNumber: number = 1): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(
      `${this._BASE_URL}${TMDB_API_CONSTANT.UPCOMING}?api_key=${this._API_KEY}&language=en-US&append_to_response=credits,videos,images&page=${pageNumber}`
    );
  }
}
