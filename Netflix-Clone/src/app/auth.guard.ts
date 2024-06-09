import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { LoginServiceService } from './login-service.service';


export const authGuard: CanActivateFn = (route, state) => {
  const _loginService = inject(LoginServiceService);
  const _router = inject(Router);


    if(_loginService.isLoggedIn()==false){
      _router.navigateByUrl("/login");
      return false;
    }

    else{
      return true;
    }
        
}
