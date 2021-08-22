import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css']
})
export class AuthorSearchComponent implements OnInit {

  constructor(private service: SharedService) { }

  public AuthorList: any = [];
  public ModalTitle:string = "Autor";


  ngOnInit(): void {
    this.getAuthorList();
  }

  getAuthorList(): void {
    this.service.getAuthorList().subscribe(data=>{
      this.AuthorList = data;
    });
  }

  nuevoClick(): void{

  }

  borrarClick(id: number): void{
    this.service.deleteAuthor(id).subscribe(data=>{
      this.getAuthorList();
    });
  }

  editarClick(data: any): void{

  }
  
}
