import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TmdbService } from '@services/tmdb.service';
import { Router } from '@angular/router';
import { IMovie } from '@model/site.model';
@UntilDestroy()
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  searchQuery: string;
  searchResult: IMovie[] = [];
  isSearchAPICalled: boolean = false;
  @ViewChild('movieCard') movieCard: ElementRef;
  isOpen: boolean = false

  constructor(private router: Router, private tmdbService: TmdbService, private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.movieCard?.nativeElement && e.target !== this.movieCard.nativeElement) {
        this.isOpen = false;
      }
    });
  }

  ngOnInit(): void {
  }

  onChangeValue(query) {
    this.isOpen = true
    this.tmdbService
      .searchMovie(query)
      .pipe()
      .subscribe((res: any) => {
        if (res?.results?.length) {
          this.isSearchAPICalled = true;
          this.searchResult = res?.results;
        } else this.searchResult = []
      });
  }


  ngOnDestroy(): void {
  }
}
