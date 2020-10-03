import { Component, Input, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthorModel } from '../../models/author-model';
import swal  from 'sweetalert2';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {


  @Input()
  author:any;
  @Input()
  modalRef: BsModalRef;

  authorSp: AuthorModel = new AuthorModel;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    if(this.author.id){
      this.authorService.getSpAuthor(this.author['id'])
      .then((authorSp:{'message':Array<AuthorModel>}) => {
        this.authorSp = authorSp.message[0];
      });
    }
  }

  onPopupValCreUpd(dataAuthor){
    swal.fire({
      icon: 'info',
      title: "¿Estás seguro?",
      html: 'Desea registrar el Autor <b>'+dataAuthor['first_name']+' '+dataAuthor['last_name']+'</b>?',
      confirmButtonText: 'Registrar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (dataAuthor['id']){
          this.onUpdate(dataAuthor);
        }else{
          this.onCreate(dataAuthor);
        }
      }
    })
  }

  onUpdate(dataAuthor) {
    this.authorService.update(dataAuthor['id'], dataAuthor).then((response:any) =>{
      if (response['message']['status'] == 2000){
        swal.fire({
          icon: 'success',
          title: "Actualizado!",
          html: response['message']['response'],
          onClose: () => {
            location.reload();
          }
        });
      }else{
        swal.fire({
          icon: 'error',
          title: "Error!",
          html: response['error'],
        });
      }
    });
  }

  onCreate(dataAuthor) {
    this.authorService.create(dataAuthor).then((response:any) =>{
      if (response['message']['status'] == 2000){
        swal.fire({
          icon: 'success',
          title: "Creado!",
          html: response['message']['response'],
          onClose: () => {
            location.reload();
          }
        });
      }else{
        swal.fire({
          icon: 'error',
          title: "Error!",
          html: response['error'],
        });
      }
    });
  }

}
