import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Author } from 'src/app/models/author';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, services: SharedService ) {
    this.Author = new Author('',new Date(),'','',0);
    this.services = services; 
  }

  private services: SharedService;
  public MenssageRequired: string = "El campo es requerido";
  public Author: Author;
  public IsEdit: boolean = false;
  public ModalTitle: string = "Autor";
  
  ngOnInit(): void {
  }

  
  saveClick(): void{
    this.services.addAuthor(this.Author).subscribe(response =>{
      const row = response;
      console.log(row);
      if(row != null){
        alert('Error en el servidor');
      }
      else{
        this.router.navigate(['/author-edit',row.Id]);
      }
    });
  }

  updateClick(): void{
    
  }
}
