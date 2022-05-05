import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListByGenreComponent } from './movie-list-by-genre.component';

describe('MoviesListByGenreComponent', () => {
  let component: MoviesListByGenreComponent;
  let fixture: ComponentFixture<MoviesListByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesListByGenreComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
