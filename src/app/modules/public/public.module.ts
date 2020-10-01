import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PostComponent } from './components/post/post.component';
import { ListComponent } from './components/list/list.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [PostComponent, ListComponent, DetailPostComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class PublicModule { }
