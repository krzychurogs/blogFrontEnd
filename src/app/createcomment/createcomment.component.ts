import { Comments } from './../model/comments';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesPostService } from '../services-post/services-post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-createcomment',
  templateUrl: './createcomment.component.html',
  styleUrls: ['./createcomment.component.css'],
})
export class CreatecommentComponent implements OnInit {
  myDate = new Date();
  listOfComments: Array<Comments> = [];
  @Input()
  idPost!: any;
  myForm = new FormGroup({
    comment_title: new FormControl(''),
    comment_text: new FormControl(''),
    date: new FormControl(this.myDate),
    users: new FormControl(localStorage.getItem('userid')),
    post: new FormControl(11),
  });

  constructor(private httpservice: ServicesPostService) {}
  onSubmit() {
    const formData = new FormData();
    for (const key in this.myForm.value) {
      formData.append(key, this.myForm.value[key]);
    }

    this.httpservice
      .createComment(formData)
      .subscribe((data: Comments) => console.log(data));
  }

  getComments(id: any) {
    this.httpservice.getCommentPost(this.idPost).subscribe((post: any) => {
      this.listOfComments = post;
      console.log('pos', post);
    });
  }

  ngOnInit(): void {
    this.getComments(this.idPost);
  }
}
