import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';

import { Router, ActivatedRouteSnapshot,RouterStateSnapshot}from '@angular/router';
import { FormService }from './form/form.service';

@Injectable()

export class AuthGuardService implements CanActivate {
  constructor(private authService: FormService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

   // if(this.authService.isLoggedIn) {
   // 	return true;
      if(localStorage.getItem('isLoggedIn') == 'true'){

   	  return true;
   }
   else {
   	this.router.navigate(['/form/login']);
   	return false;
   }
  }
}
