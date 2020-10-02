import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

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
  constructor() { }

  ngOnInit(): void {
  }

}
