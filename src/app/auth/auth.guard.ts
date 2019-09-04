import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import{ AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> {
    console.log('AuthGuard#canActivate called');
    return this.authService.user.pipe(take(1),map(user =>{
      const authenticated =  !!user;
      if(authenticated) {
        return true;
      }
      return this.router.createUrlTree(['./login']);
    }));
  }

}
