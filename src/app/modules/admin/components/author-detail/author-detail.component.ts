import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

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

  constructor() { }

  ngOnInit(): void {
  }

}
