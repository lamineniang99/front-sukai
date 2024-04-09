import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './helpers/auth.guard';
import { noReturnAuthGuard } from './helpers/no-return-auth.guard';

const routes: Routes = [
  {
    loadChildren : ()=> import('./features/features.module').then(m => m.FeaturesModule),
    path : "",
    canActivate : [authGuard]
  },
  {
    loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule),
    path : "auth" ,
    canActivate: [noReturnAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
