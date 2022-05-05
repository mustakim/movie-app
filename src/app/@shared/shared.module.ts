import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreloadDirective } from './directives/image-preload.directive';
import { SafePipe } from './pipes/safe.pipe';
import { GenreNamePipe } from './pipes/genreName.pipe';


@NgModule({
  declarations: [
    ImagePreloadDirective,
    SafePipe,
    GenreNamePipe
  ],
  imports: [CommonModule],
  exports: [ImagePreloadDirective, SafePipe, GenreNamePipe]
})
export class SharedModule { }
