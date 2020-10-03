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

  public getSpPost(id): Promise<any> {
    return new Promise( (resolve, reject) => {
      try {
        this.http.get(`${this.url}/Post/`+id).subscribe( (post: any) => {
          resolve(post);
        });
      } catch(error) {
        reject(error);
      }
    });
  }

  public delete(id): Promise<any> {
    return new Promise( (resolve, reject) => {
      try{
        this.http.delete(`${this.url}/Post/`+id).subscribe( (response:any) =>{
            resolve(response);
          });
      } catch(error) {
        reject(error);
      }
    });
  }

  public update(id, dataPost): Promise<any> {
    return new Promise( (resolve, reject) => {
      try{
        this.http.put(`${this.url}/Post/`+id, dataPost).subscribe( (response:any) =>{
            resolve(response);
          });
      } catch(error) {
        reject(error);
      }
    });
  }

  public create(dataPost): Promise<any> {
    return new Promise( (resolve, reject) => {
      try{
        this.http.post(`${this.url}/Post/`, dataPost).subscribe( (response:any) =>{
            resolve(response);
          });
      } catch(error) {
        reject(error);
      }
    });
  }
}
