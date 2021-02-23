import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { Usuario } from 'src/app/models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuario: Usuario;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }



  login(elUser: Login){
    return this.http.post<any>(`http://localhost:3000/login`,elUser)
    .pipe(                                      // Guardar el token en localStorage //
      tap((resp: any) =>{
        const{nombre, email, img, _id, role}=resp.usuarioLogin
        this.usuario=new Usuario(nombre,email,'',img,role,_id);
        this.usuario.imprimirUsuario();
        localStorage.setItem('token', JSON.stringify(resp.token));
      })
      );
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('auth');
  }

  renovarToken(){
    const token = JSON.parse(localStorage.getItem('token') || '');
    return this.http.get('http://localhost:3000/login/renew', {
      headers: {
        'mytoken':token
      }
    })
    .pipe(
      tap((resp: any)=>{
        const{nombre, email, img, _id, role}=resp.usuario
        this.usuario=new Usuario(nombre,email,'',img,role,_id);
        this.usuario.imprimirUsuario();
        localStorage.setItem('token',JSON.stringify(resp.token));
      }),
      map(resp => true),
      catchError(error => of(false))
      )
    
  }

  getOnlyUsuarios(){
    const token = localStorage.getItem('token') || ''
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios/user', {
      headers: {
        'mytoken':token
      }
    });
  }

  getUnUser(id:string){
    const token = localStorage.getItem('token') || ''
    return this.http.get<Usuario>(`http://localhost:3000/usuarios/user/${id}`, {
      headers: {
        'mytoken':token
      }
    });
  }

  getOnlyProfesor(){
    const token = localStorage.getItem('token') || ''
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios/profesor', {
      headers: {
        'mytoken':token
      }
    });
  }

  modificarUser(putUser: Usuario){
    const token = localStorage.getItem('token') || ''
    return this.http.put<Usuario>(`http://localhost:3000/usuarios/${this.usuario._id}`, putUser, {
      headers: {
        'mytoken':token
      }});
  }

  modificarUnUser(id: string, putUser: Usuario){
    const token = localStorage.getItem('token') || ''
    return this.http.put<Usuario>(`http://localhost:3000/usuarios/user/${id}`, putUser, {
      headers: {
        'mytoken':token
      }});
  }

  deleteUser(id:string){
    const token = localStorage.getItem('token') || ''
    return this.http.delete<Usuario>(`http://localhost:3000/usuarios/${id}`,{
      headers: {
        'mytoken':token
      }
    })
  }

  getCursoPopu(id: string){
    return this.http.get<Usuario>(`http://localhost:3000/usuarios/total/${id}`)
  }

  get role(): 'admin' | 'user' | 'profesor' {
    return this.usuario.role;
  }

  get tokenRol() {
    const helper = new JwtHelperService();

    const eltoken = (localStorage.getItem('token'))

    const decodedtoken = helper.decodeToken(eltoken);
    return decodedtoken;
  }
  
}
