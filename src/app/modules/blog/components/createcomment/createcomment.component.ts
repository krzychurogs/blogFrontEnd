import { IComments } from '../../../../core/interfaces/comments.interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesPostService } from '../../services/services-post/services-post.service';

@Component({
  selector: 'app-createcomment',
  templateUrl: './createcomment.component.html',
  styleUrls: ['./createcomment.component.css'],
})
export class CreatecommentComponent implements OnInit {
  myDate = new Date();
  listOfComments: Array<IComments> = [];
  @Input()
  idPost!: any;
  idUser: any;
  myForm = new FormGroup({
    comment_title: new FormControl(''),
    comment_text: new FormControl(''),
    date: new FormControl(this.myDate),
  });

  constructor(private httpservice: ServicesPostService) {
    console.log('d' + localStorage.getItem('userid'));
    this.idUser = localStorage.getItem('userid');
    console.log('com' + this.idPost);
  }
  onSubmit() {
    const formData = new FormData();
    for (const key in this.myForm.value) {
      formData.append(key, this.myForm.value[key]);
    }
    console.log('ajdi' + this.idUser);
    formData.append('comment_author', this.idUser);
    formData.append('post', this.idPost);

    this.httpservice
      .createComment(formData)
      .subscribe((data: IComments) => console.log(data));
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
