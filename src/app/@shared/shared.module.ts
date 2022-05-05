import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreNamePipe } from './pipes/genreName.pipe';
import { ImagePreloadDirective } from './directives/image-preload.directive';
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    GenreNamePipe,
    ImagePreloadDirective,
    SafePipe
  ],
  imports: [CommonModule],
  exports: [GenreNamePipe, ImagePreloadDirective, SafePipe]
})
export class SharedModule { }
