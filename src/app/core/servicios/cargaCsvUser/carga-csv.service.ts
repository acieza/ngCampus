import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CargaCsvService {

  constructor(private http: HttpClient) { }

  subirFile(datos: FormData){
    const token = localStorage.getItem('token') || '';
    return this.http.post('http://localhost:3000/usuarios/cargarUsuarios', datos, {
        headers:{
          'mytoken':token
        }
    }).pipe(
      tap(resp =>{})
    )
  }
}
