import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private url : string = environment.url;
  // private serverTcp : string = environment.serverTcp ;


  constructor(private http : HttpClient) { }


  get getHttp() : HttpClient {
    return this.http
  }

  getAllData<E> (uri : string) : Observable<E> {
    return this.http.get<E>(this.url+uri)
  }

  postData<E,S> (uri : string, data : S) : Observable<E>{
    return this.http.post<E>(this.url+uri, data) ;
  }

  getOneData<E> (uri : string, id : string) : Observable<E>{
    return this.http.get<E>(this.url+uri+'/'+id)
  }



}
