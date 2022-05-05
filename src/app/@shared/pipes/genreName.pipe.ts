import { Pipe, PipeTransform } from '@angular/core';
import { IGenre, IMovieListByGenre } from '@model/site.model';

@Pipe({ name: 'genreName' })
export class GenreNamePipe implements PipeTransform {
  genres: IGenre[] = []
  constructor() { }

  transform(values: number[]): string {
    const genres = JSON.parse(localStorage.getItem('genres'));
    if (genres?.length) this.genres = genres;


    const genreNames: string[] = [];

    if (values?.length) {
      values.forEach((value) => {
        const genreInformation = this.genres.find((genre) => genre.id === value);
        if (genreInformation) {
          genreNames.push(genreInformation.name);
        }
      });
    } else {
      return '';
    }

    const genreNamesAsString = genreNames.join(', ');
    return genreNamesAsString;
  }
}
