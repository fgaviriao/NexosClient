import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  readonly APIurl ='https://localhost:44341/api/';
  readonly AutorUrl = this.APIurl +'Authors/';
  readonly BookUrl = this.APIurl + 'Books/';
  readonly GetById = 'GetById/';
  readonly GetByAll = 'GetAll';
  readonly Post = 'Post';
  readonly Put = 'put?id=';
  readonly Delete = 'delete/?id=';
  
  constructor(private http:HttpClient) { }

  getAuthorList():Observable<any[]>{
    return this.http.get<any>(this.AutorUrl +  this.GetByAll);
  }

  getAuthorById(id:number):Observable<any>{
    var params = new HttpParams({});
    params.append('id',id);
    return this.http.get<any>(this.AutorUrl + this.GetById  + id);
  }
  

  addAuthor(value:any){
    return this.http.post<any>(this.AutorUrl +  this.Post, value);
  }

  updateAuthor(id:number, value:any){
    return this.http.put<any>(this.AutorUrl + this.Put + id, value);
  }
  
  deleteAuthor(id:any){
    return this.http.delete<any>(this.AutorUrl + this.Delete + id);
  }

  
  getBookById(id:number):Observable<any>{
    var params = new HttpParams({});
    params.append('id',id);
    return this.http.get<any>(this.BookUrl+ this.GetById + id);
  }
  
  getBookList():Observable<any[]>{
    return this.http.get<any>(this.BookUrl + this.GetByAll);
  }
  
  getBookListByAuthorId(id: number):Observable<any[]>{
    return this.http.get<any>(this.BookUrl + 'GetAllByAuthorId/' + id);
  }
  
  addBook(value:any){
    return this.http.post<any>(this.BookUrl + this.Post, value);
  }

  updateBook(id:number, value:any){
    return this.http.put<any>(this.BookUrl + this.Put + id, value);
  }
  
  deleteBook(id:any){
    return this.http.delete<any>(this.BookUrl + this.Delete + id);
  }
}
