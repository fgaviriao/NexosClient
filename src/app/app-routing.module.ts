import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { AuthorFormComponent } from './author/author-form/author-form.component';
import { AuthorComponent } from './author/author.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookFormComponent } from './book/book-form/book-form.component'; 
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path:'author', component:AuthorComponent},
  { path:'author-form', component:AuthorFormComponent},
  { path:'author-edit/:id', component:AuthorEditComponent},
  { path:'book/:id', component:BookComponent},
  { path:'book-form/:id', component:BookFormComponent},
  { path:'book-edit/:id', component:BookEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
