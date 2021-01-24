import { Injectable } from '@angular/core';

import {
  HttpParams,
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from './../model/post';
@Injectable({
  providedIn: 'root',
})
export class ServicesPostService {
  baseurl = 'http://127.0.0.1:8000';
  userid?: any = localStorage.getItem('userid');
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}
  getPost(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseurl + '/posthandle/', {
      headers: this.httpHeaders,
    });
  }

  createPost(postdata: any): Observable<any> {
    return this.http.post(this.baseurl + '/posthandle/create/', postdata);
  }
  likePost(postdata: any): Observable<any> {
    console.log(postdata);
    return this.http.patch(
      this.baseurl + '/posthandle/like/' + postdata + '/' + this.userid + '/',
      {}
    );
  }
  getUserPost(id: any): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      this.baseurl + '/posthandle/showuser/' + id + '/',
      { headers: this.httpHeaders }
    );
  }

  deleteUserPost(id: number): Observable<Array<Post>> {
    return this.http.delete<Array<Post>>(
      this.baseurl + '/posthandle/delete/' + id + '/',
      { headers: this.httpHeaders }
    );
  }
}
