import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from '../model/post';
import { ServicesPostService } from '../services-post/services-post.service';

@Component({
  selector: 'app-userspost',
  templateUrl: './userspost.component.html',
  styleUrls: ['./userspost.component.css'],
})
export class UserspostComponent implements OnInit {
  @Input()
  listOfEntries: Array<Post> = [];
  listData!: MatTableDataSource<any>;
  displayedColumns: string[] = ['title', 'date', 'totalLikes', 'actions'];
  searchKey!: string;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private servicePost: ServicesPostService) {
    this.getUserPost();
  }

  ngOnInit(): void {}
  getUserPost() {
    this.servicePost
      .getUserPost(localStorage.getItem('userid'))
      .subscribe((post: any) => {
        console.log(post);
        this.listOfEntries = post;
        this.listData = new MatTableDataSource(this.listOfEntries);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }
  editPost() {
    console.log('test');
  }
  deletePost(id: number) {
    if (confirm('Czy napewno chcesz usunać? ')) {
      console.log('Implement delete functionality here');
      this.servicePost.deleteUserPost(id).subscribe((post: any) => {
        console.log('usuniety');
      });
    }
  }
}
