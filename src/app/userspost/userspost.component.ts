import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from '../model/post';
import { ServicesPostService } from '../services-post/services-post.service';

@Component({
  selector: 'app-userspost',
  templateUrl: './userspost.component.html',
  styleUrls: ['./userspost.component.css']
})
export class UserspostComponent implements OnInit {

  @Input()
  listOfEntries:Array<Post>=[];

  listData!: MatTableDataSource<any>;
  displayedColumns: string[] = ['title','date','likes','actions'];
  constructor(private servicePost:ServicesPostService) {
    this.getUserPost();

   }

  ngOnInit(): void {
  }
  getUserPost()
  {
    this.servicePost.getUserPost(localStorage.getItem('userid')).subscribe((post:any) =>
      {
        console.log(post);
        this.listOfEntries=post
        this.listData=new MatTableDataSource(this.listOfEntries);
      });
  }
  editPost()
  {
    console.log('test');
  }
  deletePost(id:number)
  {
    if(confirm("Czy napewno chcesz usunać? ")) {
      console.log("Implement delete functionality here");
      this.servicePost.deleteUserPost(id).subscribe((post:any)=>
      {
            console.log('usuniety')
      });
   }


  }
}
