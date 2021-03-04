import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicesPostService } from '../services-post/services-post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-userblog',
  templateUrl: './userblog.component.html',
  styleUrls: ['./userblog.component.css'],
})
export class UserblogComponent implements OnInit {
  listOfEntries: Array<Post> = [];
  userId: any;

  constructor(
    private route: ActivatedRoute,
    private serviceUserPost: ServicesPostService
  ) {
    this.route.params.subscribe((params: any) => {
      console.log(params.id);
      this.userId = params.id;
      this.getUserPost();
    });
  }

  ngOnInit(): void {}

  getUserPost() {
    this.serviceUserPost.getUserPost(this.userId).subscribe((post: any) => {
      console.log(post);
      this.listOfEntries = post;
    });
  }
  likePost(id: any) {
    console.log('num' + id);
    window.location.reload();
    this.serviceUserPost.likePost(id).subscribe((post: Post) => {
      console.log(post);
    });
  }
}
