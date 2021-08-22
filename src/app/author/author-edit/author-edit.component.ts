import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  public Author: Author;
  public Message: string ="";
  public ModalTitle: string ="Libro";

  constructor(router: Router, route:ActivatedRoute, services: SharedService) { 
    this.Author = new Author('',new Date(),'','',0);
    this.services = services;
    this.route = route;
    this.router = router; 
  }

  private services: SharedService;
  private route: ActivatedRoute;
  private router: Router;
  private rowId: number = 0;

  ngOnInit(): void {
this.getAuthorById();
}

public updateClick(){
  this.services.updateAuthor(this.rowId, this.Author).subscribe(response =>{

    const row:Author = response as Author;
    var id:number = row.Id;
    if(row != null){
      alert('Error en el servidor');
    }
    else{
      this.router.navigate(['/author-edit',id]);
    }
  });
}

  private getAuthorById(){
    const paramId = 'id';
    this.route.params.forEach((params: Params) => {
        const id = params[paramId];
        this.rowId = id;
        this.services.getAuthorById(id)
        .subscribe(response => {
            if (!response){
                this.router.navigate(['/']);
            }else{
                this.Author = response; //response.album as Album;
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
