import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParentService } from 'src/app/shared/Services/parent.service';
import { environment } from 'src/environments/environment.development';
import * as net from 'net';

@Injectable({
  providedIn: 'root'
})
export class SdmService extends ParentService{

  private ip_server : string = environment.ip_sever
  private port : number = environment.port ;
  private client : net.Socket ;

  constructor(http : HttpClient){
    super(http);
    this.client = new net.Socket() ;
    this.client.connect(this.port, this.ip_server, () =>{
      console.log('client connected');
    })
  }

  sendMessage(message : any){
    if (this.client) {
        this.client.write(message)
    }else{
      console.log('client not connected');
    }
  }

  getUserByLocalStorage() : any{
    const user : any = localStorage.getItem('user')
    return JSON.parse(user)
  }




}
