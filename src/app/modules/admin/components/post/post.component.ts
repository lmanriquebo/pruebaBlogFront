import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PostService } from '../../services/post.service';
import swal  from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:any;
  @Input()
  authors:any;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private postService: PostService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

  onPopupDelete(dataPost){
    swal.fire({
      icon: 'info',
      title: "¿Estás seguro?",
      html: 'Desea eliminar el Post <b>'+dataPost['title']+'</b>?',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.postService.delete(dataPost['id']).then((response:any) =>{
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
