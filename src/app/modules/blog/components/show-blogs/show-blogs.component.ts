import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ServicesPostService } from '../../services/services-post/services-post.service';
import { IPost } from '../../../../core/interfaces/post.interfaces';

@Component({
  selector: 'app-show-blogs',
  templateUrl: './show-blogs.component.html',
  styleUrls: ['./show-blogs.component.css'],
})
export class ShowBlogsComponent implements OnInit {
  listOfEntries: Array<IPost> = [];
  listData!: MatTableDataSource<any>;
  displayedColumns: string[] = ['author', 'totalLikes', 'actions'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private router: Router, private service: ServicesPostService) {
    this.getBlogs();
  }

  ngOnInit(): void {}
  getBlogs() {
    this.service.getBlogPost().subscribe((post) => {
      this.listOfEntries = post;
      this.listData = new MatTableDataSource(this.listOfEntries);
      this.listData.paginator = this.paginator;
      console.log(post);
    });
  }
  goToPage(pageNum: any) {
    this.router.navigate(['/bloguser']);
  }
}
