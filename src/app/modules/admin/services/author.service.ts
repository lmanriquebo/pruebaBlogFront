import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url : string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  public getAllAuthor(): Promise<any> {
    return new Promise( (resolve, reject) => {
      try {
        this.http.get(`${this.url}/Author`).subscribe( (authors: any) => {
          resolve(authors);
        });
      } catch(error) {
        reject(error);
      }
    });
  }

  public getSpAuthor(id): Promise<any> {
    return new Promise( (resolve, reject) => {
      try {
        this.http.get(`${this.url}/Author/`+id).subscribe( (author: any) => {
          resolve(author);
        });
      } catch(error) {
        reject(error);
      }
    });
  }

  public delete(id): Promise<any> {
    return new Promise( (resolve, reject) => {
      try{
        this.http.delete(`${this.url}/Author/`+id).subscribe( (response:any) =>{
            resolve(response);
          });
      } catch(error) {
        reject(error);
      }
    });
  }

  public update(id, dataAuthor): Promise<any> {
    return new Promise( (resolve, reject) => {
      try{
        this.http.put(`${this.url}/Author/`+id, dataAuthor).subscribe( (response:any) =>{
            resolve(response);
          });
      } catch(error) {
        reject(error);
      }
    });
  }

  public create (dataAuthor): Promise<any> {
    return new Promise( (resolve, reject) => {
      try{
        this.http.post(`${this.url}/Author/`, dataAuthor).subscribe( (response:any) =>{
            resolve(response);
          });
      } catch(error) {
        reject(error);
      }
    });
  }
}
