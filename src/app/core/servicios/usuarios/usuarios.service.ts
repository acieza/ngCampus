import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from 'src/app/models/registro';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createUser(newUser:Registro){
    return this.http.post<Registro>('http://localhost/usuarios', newUser);
  }
}
