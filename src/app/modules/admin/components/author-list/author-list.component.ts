import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../../models/author-model';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {


  authors: AuthorModel[]=[];

  constructor(private authorService: AuthorService) { }

  empty = {
    id :"",
    first_name :"",
    last_name :"",
    created_at :"",
    updated_at :"",
    deleted_at :null,
    post :{}
  };

  ngOnInit(): void {
    this.authorService.getAllAuthor()
    .then((authors: AuthorModel) => {
      this.authors = authors['message'].concat(this.empty);
      console.log(this.authors);
    });
  }

}
