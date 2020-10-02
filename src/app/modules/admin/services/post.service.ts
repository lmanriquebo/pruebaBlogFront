import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url : string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  public getAllPost(): Promise<any> {
    return new Promise( (resolve, reject) => {
      try {
        this.http.get(`${this.url}/Post`).subscribe( (posts: any) => {
          resolve(posts);
        });
      } catch(error) {
        reject(error);
      }
    });
  }
}
