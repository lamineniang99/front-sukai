import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './Components/client/client.component';
import { DmComponent } from './Components/dm/dm.component';
import { SdmsComponent } from './Components/sdms/sdms.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProfilComponent } from './Components/profil/profil.component';
import { ParametreComponent } from './Components/parametre/parametre.component';


const routes: Routes = [
  {
    path : '',
    component : ClientComponent,
    children : [
      {
        path : '',
        component : DmComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path : 'profil',
        component: ProfilComponent
      },
      {
        path : ':idDm/sdms',
        component: SdmsComponent ,
        children : [
          {
            path : 'perimetre/:idPerimetre',
            component : ParametreComponent
          }
        ]
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
