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
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PostComponent, AuthorComponent, AuthorListComponent, PostListComponent, MainComponent, PostDetailComponent, AuthorDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class AdminModule { }
