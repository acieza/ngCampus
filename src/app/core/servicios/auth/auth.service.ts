import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }



  login(elUser: Login){
    return this.http.post<any>(`http://localhost:3000/login`,elUser)
    .pipe(                                      // Guardar el token en localStorage //
      tap(resp =>{
        localStorage.setItem('token', resp.token)
      })
      );
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('auth');
  }

  renovarToken(){
    const token = localStorage.getItem('token') || ''
    return this.http.get('http://localhost:3000/login/renew', {
      headers: {
        'mytoken':token
      }
    })
    .pipe(
      tap((resp: any)=>{
        localStorage.setItem('token', resp.token);
      }),
      map(resp => true),
      catchError(error => of(false))
      )
    
  }



  
}
