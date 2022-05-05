export interface IGenre {
  id: number;
  name: string;
}

export interface IDiscoverPageContent<T> {
  page: number;
  total_results: number;
  total_pages: number;
  results: T[];
}

export interface IMovie {
  name: string;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids?: number[];
  id: number;
  original_title: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  isSimilarMovies?: boolean;
}

export interface ISelectOption {
  label: string;
  value: string | number;
}

export interface IMovieListByGenre {
  id: number;
  genre: IGenre;
  movies: IMovie[]
}

export interface ICast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number
  id: number
  known_for_department: string
  name: string
  order: number
  original_name: string
  popularity: number
  profile_path: string
}

export interface ICrew {
  department: string;
  job: string;
  adult: boolean;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface IMovieCredit {
  cast: ICast[];
  crew: ICrew[];
}

export interface IMovieDetails {
  name: string;
  adult: boolean;

  backdrop_path: string | null;

  belongs_to_collection: null | object;

  budget: number;

  genres: IGenre[];

  homepage: string | null;

  id: number;

  imdb_id: string | null;

  credits: IMovieCredit;
  original_language: string;

  original_title: string;

  overview: string | null;

  popularity: number;

  poster_path: string | null;

  release_date: string;

  revenue: number;

  runtime: number | null;

  status: string;

  tagline: string | null;

  title: string;

  video: boolean;

  vote_average: number;

  vote_count: number;
  videos: { results: IMovieVideo[] }
}

export interface IMovieVideo {
  id: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string
  site: string
  size: number
  type: string
}

export interface IWatchlistMovie {
  id: number;
  movie: IMovie;
}

export interface IMovieListByCategory {
  id: string;
  movies: IMovie[]
  total_pages: string,
  total_results: string
}

export interface ICategory {
  id: string;
  name: string;
}
