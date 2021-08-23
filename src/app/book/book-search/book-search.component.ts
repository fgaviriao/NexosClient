import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  constructor(private services: SharedService, private route:ActivatedRoute, private router:Router) { }

  public BookList: any = [];
  public ModalTitle:string = "Libros";
  public Message:string ="";
  public AuthorId: number =0;

  ngOnInit(): void {
    this.getBookList();
    this.getAuthorName();
  }

  
  borrarClick(id: number): void{
    this.services.deleteBook(id).subscribe(data=>{
      this.getBookList();
    });
  }

  getAuthorName(): void {
    this.services.getAuthorById(this.AuthorId).subscribe(data=>{
      var row = data as Author;
      if(data!=null){
        this.ModalTitle = "Administración de libros - " + row.Name; 
      }
    })
  }

  getBookList(): void {
    const paramId = 'id';
    this.route.params.forEach((params: Params) => {
        const id = params[paramId];
        this.AuthorId = id;
        this.services.getBookListByAuthorId(id).subscribe(data => {
            this.BookList = data;
        },
        errorResponse => {
            const data = errorResponse as HttpErrorResponse;
            if (data != null) {
            this.Message = data.error.message;
          }
        });
    });
  }
}
