import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Book } from 'src/app/models/book';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  public Book: Book;
  public ModalTitle: string = "Libro";
  public AuthorId: number = 0;

  constructor(private services: SharedService, private router: Router, private route: ActivatedRoute) {
    this.Book = new Book('',2021,'',1,0,0);
   }

  
  ngOnInit(): void {
this.getAuthorId();
  }

  getAuthorId():  void{
    const paramId = 'id';
    this.route.params.forEach((params: Params) => {
      this.AuthorId = params[paramId];
    });
  }
  
  saveClick(): void { 

    this.Book.AuthorId = this.AuthorId;
    console.log(this.Book);
    this.services.addBook(this.Book).subscribe(response =>{
      const row = response as Book;
      var id = row.AuthorId;
this.router.navigate(['/book',id]);
              
//       if(row == null){
//         alert('Error en el servidor');
//       }
//       else{
// this.router.navigate(['/book',id]);
//       }
    });
  }
}
