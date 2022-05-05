import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListByCategoryComponent } from './movie-list-by-category.component';

describe('MoviesListByCategoryComponent', () => {
  let component: MoviesListByCategoryComponent;
  let fixture: ComponentFixture<MoviesListByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesListByCategoryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
