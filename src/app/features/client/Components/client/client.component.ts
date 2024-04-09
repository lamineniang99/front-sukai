import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  constructor(private router : Router){}


  onDeconnexion(){
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.router.navigateByUrl('/auth')
  }

  onProfil(){
    this.router.navigateByUrl('profil')
  }

  onContact(){
    this.router.navigateByUrl('contact')
  }

  onAccueil(){
    this.router.navigateByUrl('')
  }

}
