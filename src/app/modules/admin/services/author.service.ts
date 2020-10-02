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
}
