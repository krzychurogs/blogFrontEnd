import { Injectable } from '@angular/core';

import {
  HttpParams,
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from './../model/post';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ServicesPostService {
  [x: string]: any;
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
  createComment(postdata: any): Observable<any> {
    return this.http.post(
      this.baseurl + '/posthandle/createcomment/',
      postdata
    );
  }
  getCommentPost(id: any): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      this.baseurl + '/posthandle/showcomment/' + id + '/',
      { headers: this.httpHeaders }
    );
  }
  likePost(postdata: any): Observable<any> {
    console.log(postdata);
    return this.http.patch(
      this.baseurl + '/posthandle/like/' + postdata + '/' + this.userid + '/',
      {}
    );
  }
  getDetailPost(id: any): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      this.baseurl + '/posthandle/showdetail/' + id + '/',
      { headers: this.httpHeaders }
    );
  }
  getUserPost(id: any): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      this.baseurl + '/posthandle/showuser/' + id + '/',
      { headers: this.httpHeaders }
    );
  }
  getBlogPost(): Observable<any> {
    return this.http.get<Array<Post>>(this.baseurl + '/posthandle/allblog/');
  }

  deleteUserPost(id: number): Observable<Array<Post>> {
    return this.http.delete<Array<Post>>(
      this.baseurl + '/posthandle/delete/' + id + '/',
      { headers: this.httpHeaders }
    );
  }

  getFurtherPosts(url: string): Observable<HttpResponse<any>> {
    return this.http.get(url, {}).pipe(
      map((res: any) => {
        return {
          ...res,
          results: [...res.results].map((element) => ({
            ...element,
          })),
        };
      })
    );
  }
}
