import { Injectable } from '@angular/core';
import { ParentService } from 'src/app/shared/Services/parent.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ParentService{

  isAutentificated() : boolean{

    return localStorage.getItem('token') ? true : false
  }

  getUserByLocalStorage() : any {
    return JSON.parse(localStorage.getItem('user')!)
  }

}
