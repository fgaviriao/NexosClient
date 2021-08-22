import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  public Message: string = "";
  public Book: Book;
  public ModalTitle:string = "Libros";

  private rowId: number = 0;

  
  constructor(private services: SharedService, private route: ActivatedRoute, private router: Router) { 
    this.Book = new Book('',0,'',0,0,0);
  }

  ngOnInit(): void {
    this.getBookById();
  }

  

  public updateClick(){
    this.services.updateBook(this.rowId, this.Book).subscribe(response =>{
  
      const row: Book = response as Book;
      var id:number = row.AuthorId;
      
      if(row == null){
        alert('Error en el servidor');
      }
      else{
        this.router.navigate(['/book',id]);
      }
    });
  }
  
    private getBookById(){
      const paramId = 'id';
      this.route.params.forEach((params: Params) => {
          const id = params[paramId];
          this.rowId = id;
          this.services.getBookById(id)
          .subscribe(response => {
              if (!response){
                  this.router.navigate(['/']);
              }else{
                  this.Book = response;
              }
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
