import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
                          {path:'list',component:ListComponent},
                          {path:'detail/:id',component:DetailPostComponent},
                          {path:'',pathMatch:'full', redirectTo:'list'}
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
