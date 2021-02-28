import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../core/servicios/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      console.log('***** Paso por aqui *******')
if(localStorage.getItem('token')){
     return this.authService.renovarToken()
     
     .pipe(
      tap(estalogeado =>{
        if(!estalogeado){
          this.router.navigateByUrl('/auth');
        }
      })
    )
        }else{
          this.router.navigateByUrl('/auth')
        }
    }
}
