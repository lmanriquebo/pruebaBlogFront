import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AdminRoutingModule } from './admin-routing.module';
import { PostComponent } from './components/post/post.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { MainComponent } from './components/main/main.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [PostComponent, AuthorComponent, AuthorListComponent, PostListComponent, MainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class AdminModule { }
