import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
                          {path:"", children:[
                                              {path:"admin",loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
                                              {path:"public",loadChildren:()=>import('./modules/public/public.module').then(m=>m.PublicModule)},
                                              {path:"", pathMatch:"full",redirectTo:"public"}
                                            ]},
                          {path:"**", pathMatch:"full", redirectTo:""}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
