import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AuthorFormComponent } from './author/author-form/author-form.component';
import { AuthorSearchComponent } from './author/author-search/author-search.component';

import { SharedService } from './shared.service';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookSearchComponent } from './book/book-search/book-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorFormComponent,
    AuthorSearchComponent,
    AuthorEditComponent,
    BookComponent,
    BookFormComponent,
    BookEditComponent,
    BookSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
