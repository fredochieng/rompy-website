import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor( private routes: Router, private auth: AuthService){}

    currentUser = this.auth.userValue;
   

    canActivate(): boolean {

      return this.canLoad();

  }

  canLoad(): boolean {

      if (!this.auth.isLoggedIn()) {
        this.routes.navigate(['/login']);
      }
      return this.auth.isLoggedIn();
    }
  
}
