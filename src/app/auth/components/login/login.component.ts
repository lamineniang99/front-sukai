import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { Login } from '../../Interfaces/login';
import { PesponseLogin } from '../../Interfaces/pesponse-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message : string = ''


  constructor(private authService : LoginService, private router : Router){}

  onSubmit(signeForm : NgForm) {
    console.log(signeForm.value);
    this.authService.postData<PesponseLogin, Login>("/api/login", signeForm.value).subscribe({
      next : (data) => {
        console.log(data.data.token);
        localStorage.setItem('token', data.data.token)
        const user = data.data.user
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user))
        if (user.role === 'Client') {
          this.router.navigateByUrl('')
        }
        if (user.role === 'Admin') {

        }



      } ,
      error : (err) => {
        this.message = err.error.message
        console.log(err.error.message);

      }
    })

  }

}
