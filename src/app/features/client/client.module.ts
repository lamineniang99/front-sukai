import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { DmComponent } from './Components/dm/dm.component';
import { ClientComponent } from './Components/client/client.component';
import { SdmsComponent } from './Components/sdms/sdms.component';
import { ProfilComponent } from './Components/profil/profil.component';
import { ParametreComponent } from './Components/parametre/parametre.component';


@NgModule({
  declarations: [
    DmComponent,
    ClientComponent,
    SdmsComponent,
    ProfilComponent,
    ParametreComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
