import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../../../core/interfaces/post.interfaces';

import { ServicesPostService } from '../../services/services-post/services-post.service';

@Component({
  selector: 'app-more-info-post',
  templateUrl: './more-info-post.component.html',
  styleUrls: ['./more-info-post.component.css'],
})
export class MoreInfoPostComponent implements OnInit {
  listOfEntries: Array<IPost> = [];
  idEntry: any;

  constructor(
    private route: ActivatedRoute,
    private serviceUserPost: ServicesPostService
  ) {
    this.route.params.subscribe((params: any) => {
      console.log(params.id);
      this.idEntry = params.id;
    });
    this.getPost();
  }
  getPost() {
    this.serviceUserPost.getDetailPost(this.idEntry).subscribe((post: any) => {
      this.listOfEntries = post;
      console.log(post);
    });
  }
  likePost(id: any) {
    console.log('num' + id);
    window.location.reload();
    this.serviceUserPost.likePost(id).subscribe((post: IPost) => {
      console.log(post);
    });
  }
  ngOnInit(): void {}
}
