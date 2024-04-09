import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/Services/login.service';

@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.css']
})
export class DmComponent implements OnInit{
  value! : any
  localite! : string
  temperature! : string
  humidity! : string
  idDm! : string

  constructor(private authService : LoginService, private router : Router){}


  ngOnInit(): void {
    this.value = this.authService.getUserByLocalStorage()
    console.log(this.value);
    this.localite = this.value.dms.localite
    this.temperature = this.value.dms.temperatur
    this.humidity = this.value.dms.humidity
    this.idDm = this.value.dms._id
  }

  onDm(id : string){
    this.router.navigateByUrl(id+"/sdms")
  }
}
