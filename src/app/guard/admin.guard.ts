import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/servicios/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('token')) {

      if (this.authService.tokenRol.role === 'admin' || this.authService.tokenRol.role === 'profesor') {
        return true
      } else {
        this.router.navigateByUrl('lms')

      }
    } else {
      this.router.navigateByUrl('/auth')
    }
  }

}
