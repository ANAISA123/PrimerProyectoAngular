import { Injectable } from '@angular/core';	
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //Logica de negocio
      //Return boolean
      const id = localStorage.getItem('id');
      if (id === '1234') {
        console.log ('El id es correto');
        return true;
      } else {
        console.log ('El id es incorreto');
        return false;
      }
    }
};
