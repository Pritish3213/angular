import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  //if there is a user logged, i.e if local storage is not empty then return else navigate to the login page
  canActivate(): boolean{
    if(localStorage.getItem('token') != null){
      return true;
    }
    else{
      this.router.navigate(['public/login']);
      return false;
    }
  }
}
