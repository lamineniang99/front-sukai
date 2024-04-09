import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../auth/Services/login.service';

export const noReturnAuthGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)
  const router = inject(Router)
  if (loginService.isAutentificated()) {
    router.navigateByUrl('')
    return false
  }
  return true;
};
