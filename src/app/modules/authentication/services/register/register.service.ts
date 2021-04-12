
import { Injectable } from '@angular/core';
import { HttpParams, HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseurl="http://127.0.0.1:8000";
  httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private httpClient:HttpClient) { }

  registerUser(userData:any):Observable<any>
  {
    return this.httpClient.post('http://127.0.0.1:8000/api/users/',userData)

  }
}
