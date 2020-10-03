import { Component, Input, OnInit , TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthorService } from '../../services/author.service';
import swal  from 'sweetalert2';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {


  @Input()
  author:any;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private authorService: AuthorService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

  onPopupDelete(dataAuthor){
    swal.fire({
      icon: 'info',
      title: "¿Estás seguro?",
      html: 'Desea eliminar el Autor <b>'+dataAuthor['first_name']+" "+dataAuthor['last_name']+'</b>?',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.authorService.delete(dataAuthor['id']).then((response:any) =>{
          if (response['message']['status'] == 2000){
            swal.fire({
              icon: 'success',
              title: "Eliminado!",
              html: response['message']['response'],
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
    })
  }
}
