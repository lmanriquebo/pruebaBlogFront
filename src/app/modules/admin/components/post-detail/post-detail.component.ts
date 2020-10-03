import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PostModel } from '../../models/post-model';
import swal  from 'sweetalert2';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input()
  post:any;
  @Input()
  authors:any;
  @Input()
  modalRef: BsModalRef;
  fileToUpload: File;
  postSp: PostModel = new PostModel;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    if(this.post.id){
      this.postService.getSpPost(this.post['id'])
      .then((postSp:{'message':Array<PostModel>}) => {
        this.postSp = postSp.message[0];
        console.log(this.postSp);
      });
    }
  }

  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
      let readAsArrayBuffer = new FileReader();
      readAsArrayBuffer.onloadend = (e) =>{
        this.postSp.image = readAsArrayBuffer.result;
      }
      readAsArrayBuffer.readAsDataURL(this.fileToUpload);
  }

  onPopupValCreUpd(dataPost){
    swal.fire({
      icon: 'info',
      title: "¿Estás seguro?",
      html: 'Desea registrar el Post <b>'+dataPost['title']+'</b>?',
      confirmButtonText: 'Registrar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (dataPost['id']){
          this.onUpdate(dataPost);
        }else{
          this.onCreate(dataPost);
        }
      }
    })
  }

  onUpdate(dataPost) {
    this.postService.update(dataPost['id'], dataPost).then((response:any) =>{
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

  onCreate(dataPost) {
    this.postService.create(dataPost).then((response:any) =>{
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
