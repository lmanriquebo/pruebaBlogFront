import { Component, Input, OnInit } from '@angular/core';
import { PostListModel } from '../../models/post-list-model';
import { PostListService } from '../../services/post-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  salida:string
  posts: PostListModel[]=[];

  constructor(private postListService: PostListService) { }

  ngOnInit(): void {
    this.postListService.getAllPost()
    .then((posts: PostListModel) => {
      this.posts = posts['message'];
    });
  }

  registrarSalida(salida:string){
    this.salida = salida;
  }

}
