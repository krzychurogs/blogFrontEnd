import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
const httpOptions =
{
  headers:new HttpHeaders(
    {
      'Content-Type':'application:json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl="http://127.0.0.1:8000";
  httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private httpClient:HttpClient) { }

  loginUser(userData:any):Observable<any>
  {
    return this.httpClient.post('http://127.0.0.1:8000/api/login/',userData)

  }
  loggedIn()
  {
    return !!localStorage.getItem('usertoken')
  }


}
