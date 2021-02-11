import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubirService {

  constructor(private http: HttpClient) { }

  subirFoto(datos: FormData){
    const token = localStorage.getItem('token') || '';
    return this.http.post('http://localhost:3000/subir', datos, {
        headers:{
          'mytoken':token
        }
    }).pipe(
      tap(resp =>{})
    )
  }
  subirFotoC(datos: FormData){
    const token = localStorage.getItem('token') || '';
    return this.http.post('http://localhost:3000/subir/imgCurso', datos, {
        headers:{
          'mytoken':token
        }
    }).pipe(
      tap(resp =>{})
    )
  }

  
}
