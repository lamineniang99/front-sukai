import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SdmService } from '../../Services/sdm.service';
import { Sdm } from '../../Interfaces/sdm';
import { Perimetre } from '../../Interfaces/perimetre';

@Component({
  selector: 'app-sdms',
  templateUrl: './sdms.component.html',
  styleUrls: ['./sdms.component.css']
})
export class SdmsComponent implements OnInit{
  idDm! : string
  sdms! : Sdm []
  user: any
  lib : string = "";
  modalPerimetre : Perimetre = <Perimetre>{} ;


  constructor(private activatedRoute : ActivatedRoute,private sdmService : SdmService){}

  ngOnInit(): void {

    this.user = this.sdmService.getUserByLocalStorage()
    // console.log(this.user.dms._id);


    this.idDm = this.activatedRoute.snapshot.params['idDm']
    // console.log(this.idDm);
    this.sdmService.getOneData<any>('/api/dm/', this.idDm).subscribe({
      next : (data) => {
        this.sdms = data.data.sdms
      },
      error : (err) =>{
        console.log(err);
      }
    })

  }

  showContains(id_sdm : string, id_perimetre : string){
    this.modalPerimetre = this.sdms.find(item => item._id === id_sdm)!.perimetreIds.find(item => item._id === id_perimetre)!
  }

  onWatering(perimetre : any){
    console.log(perimetre);
    this.sdmService.sendMessage(perimetre)
  }

  // getMessage(){
  //   this.sdmService.getMessage().subscribe((data:any) => {
  //     console.log(data);
  //   })
  // }

}
