import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { ServicesPostService } from '../../services/services-post/services-post.service';
import { HostListener } from '@angular/core';
import { IPost } from '../../../../core/interfaces/post.interfaces';
@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
  providers: [ServicesPostService],
})
export class ShowPostComponent implements OnInit {
  listOfEntries: Array<IPost> = [];
  private previousurl: string = '';
  private nextUrl: string = '';
  checkurl: boolean = false;
  checkpreviousurl: boolean = false;
  private counter: any;
  private message: string = '';

  constructor(private service: ServicesPostService, private router: Router) {
    this.getPosts();
  }

  getPosts() {
    this.service.getPost().subscribe((post: any) => {
      this.listOfEntries = post.results;
      this.counter = post.results.length;
      this.nextUrl = post.next;
      if (post.next != null) {
        this.checkurl = true;
      }
      if (post.previous != null) {
        console.log('prawda');
        this.checkpreviousurl = true;
      }
      console.log('pr' + post.previous);
      this.previousurl = post.previous;
      console.log(post);
      console.log('licz' + this.counter);
    });
  }
  ngOnInit(): void {}
  goToDetail() {
    this.router.navigate(['moredetail']);
  }
  likePost(id: any) {
    console.log('num' + id);
    window.location.reload();
    this.service.likePost(id).subscribe((post: IPost) => {
      console.log(post);
    });
  }

  goNextPage() {
    if (this.nextUrl !== null) {
      this.service.getFurtherPosts(this.nextUrl).subscribe(
        (res: any) => {
          this.listOfEntries = [...res.results];
          console.log(res);
          this.nextUrl = res.next;
          this.previousurl = res.previous;
          if (res.next != null) {
            this.checkurl = true;
          } else if (res.next == null) {
            this.checkurl = false;
          }
          if (res.previous != null) {
            this.checkpreviousurl = true;
          } else if (res.previous == null) {
            this.checkpreviousurl = false;
          }
        },
        (error) => {
          this.message = error.message;
        }
      );
    }
  }
  goPreviousPage() {
    console.log('dziala');
    if (this.previousurl !== null) {
      this.service.getFurtherPosts(this.previousurl).subscribe(
        (res: any) => {
          this.listOfEntries = [...res.results];
          this.previousurl = res.previous;
          this.nextUrl = res.next;
          if (res.next != null) {
            this.checkurl = true;
          } else if (res.next == null) {
            this.checkurl = false;
          }
          if (res.previous != null) {
            console.log('prawda');
            this.checkpreviousurl = true;
          } else if (res.previous == null) {
            this.checkpreviousurl = false;
          }
        },
        (error) => {
          this.message = error.message;
        }
      );
    }
  }
}
