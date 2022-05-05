import { Pipe, PipeTransform } from '@angular/core';
import { IGenre, IMovieListByGenre } from '@model/site.model';
import { MoviesByGenreQuery } from '@state/movies-by-genre/movies-by-genre.query';

@Pipe({ name: 'genreName' })
export class GenreNamePipe implements PipeTransform {
  constructor(private moviesByGenreQuery: MoviesByGenreQuery) { }

  transform(values: number[]): string {
    const genreNames: string[] = [];
    const moviesByGenre: IMovieListByGenre[] = this.moviesByGenreQuery.getAllMoviesByGenre();

    if (values?.length) {
      values.forEach((value) => {
        const genreInformation = moviesByGenre.find((genre) => genre.genre.id === value);
        if (genreInformation) {
          genreNames.push(genreInformation.genre.name);
        }
      });
    } else {
      return '';
    }

    const genreNamesAsString = genreNames.join(', ');
    return genreNamesAsString;
  }
}
