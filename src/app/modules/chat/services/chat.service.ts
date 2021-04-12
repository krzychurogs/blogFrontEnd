import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/core/interfaces/message.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}
  baseurl = 'http://127.0.0.1:8000/';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Token ${localStorage.getItem('usertoken')}`,
  });
  getChatMessage(id: any): Observable<Array<IMessage>> {
    return this.http.get<Array<IMessage>>(
      this.baseurl + 'message/chat/' + id + '/',
      { headers: this.httpHeaders }
    );
  }

  getListOfMessageUsers(id: any): Observable<Array<IMessage>> {
    return this.http.get<Array<IMessage>>(
      this.baseurl + 'message/message/' + id + '/',
      {
        headers: this.httpHeaders,
      }
    );
  }

  getListOfChatUsers(id: any): Observable<Array<IMessage>> {
    return this.http.get<Array<IMessage>>(
      this.baseurl + 'message/list/' + id + '/',
      {
        headers: this.httpHeaders,
      }
    );
  }
  getUserID(): any {
    return this.http.get<Array<IMessage>>(this.baseurl + 'api/users/detail/', {
      headers: this.httpHeaders,
    });
  }
  sendMessage(postdata: any): Observable<any> {
    return this.http.post(this.baseurl + 'message/message/', postdata);
  }
}
