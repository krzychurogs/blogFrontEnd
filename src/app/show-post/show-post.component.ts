import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { ServicesPostService } from '../services-post/services-post.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
  providers: [ServicesPostService],
})
export class ShowPostComponent implements OnInit {
  @Input()
  listOfEntries: Array<Post> = [];

  constructor(private service: ServicesPostService, private router: Router) {
    this.getPosts();
  }

  getPosts() {
    this.service.getPost().subscribe((post) => {
      this.listOfEntries = post;
    });
  }
  ngOnInit(): void {}
  goToDetail() {
    this.router.navigate(['moredetail']);
  }
  likePost(id: any) {
    console.log('num' + id);
    window.location.reload();
    this.service.likePost(id).subscribe((post: Post) => {
      console.log(post);
    });
  }
}
