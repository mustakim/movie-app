import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { MovieSearchComponent } from '@module/movie-search/movie-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MovieSearchComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    RouterModule.forRoot(AppRoutes),
    AkitaNgDevtools.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
