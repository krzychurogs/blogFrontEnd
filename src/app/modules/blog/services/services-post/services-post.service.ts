import { Injectable } from '@angular/core';

import {
  HttpParams,
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from 'src/app/core/interfaces/post.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServicesPostService {
  [x: string]: any;
  baseurl = 'http://127.0.0.1:8000';
  userid?: any = localStorage.getItem('userid');
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  getPost(): Observable<Array<IPost>> {
    return this.http.get<Array<IPost>>(this.baseurl + '/posthandle/', {
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
  getCommentPost(id: any): Observable<Array<IPost>> {
    return this.http.get<Array<IPost>>(
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
  getDetailPost(id: any): Observable<Array<IPost>> {
    return this.http.get<Array<IPost>>(
      this.baseurl + '/posthandle/showdetail/' + id + '/',
      { headers: this.httpHeaders }
    );
  }
  getUserPost(id: any): Observable<Array<IPost>> {
    return this.http.get<Array<IPost>>(
      this.baseurl + '/posthandle/showuser/' + id + '/',
      { headers: this.httpHeaders }
    );
  }
  getBlogPost(): Observable<any> {
    return this.http.get<Array<IPost>>(this.baseurl + '/posthandle/allblog/');
  }

  deleteUserPost(id: number): Observable<Array<IPost>> {
    return this.http.delete<Array<IPost>>(
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
