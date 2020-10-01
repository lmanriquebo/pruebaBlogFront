import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, PaginationComponent],
  imports: [
    CommonModule
  ],exports:[HeaderComponent, FooterComponent, PaginationComponent]
})
export class UtilitiesModule { }
