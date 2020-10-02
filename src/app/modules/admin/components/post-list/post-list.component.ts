import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post-model';
import { AuthorModel } from '../../models/author-model';
import { PostService } from '../../services/post.service';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: PostModel[]=[];
  authors: AuthorModel[]=[];
  constructor(private postService: PostService, private authorService: AuthorService) { }

  empty = {
    id :"",
    title :"",
    content :"",
    image :"",
    authors_id :"",
    created_at :"",
    updated_at :"",
    deleted_at :null,
    author :{
      id : "",
      first_name : "",
      last_name : "",
      created_at : "",
      updated_at : "",
      deleted_at : null
    }
  };

  ngOnInit(): void {
    this.postService.getAllPost()
    .then((posts: PostModel) => {
      this.posts = posts['message'].concat(this.empty);
    });
    this.authorService.getAllAuthor()
    .then((authors: AuthorModel) => {
      this.authors = authors['message'];
    });
  }

}
