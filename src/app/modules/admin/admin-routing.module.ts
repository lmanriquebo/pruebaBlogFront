import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { MainComponent } from './components/main/main.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
                          {path:'main',component:MainComponent},
                          {path:'authors',component:AuthorListComponent},
                          {path:'posts',component:PostListComponent},
                          {path:'',pathMatch:'full', redirectTo:'main'}
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
