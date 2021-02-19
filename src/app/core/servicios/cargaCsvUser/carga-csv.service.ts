import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargaCsvService {

  constructor(private http: HttpClient) { }

  postCSV(){
    const token = localStorage.getItem('token') || ''
    return this.http.post<any>('http://localhost:3000/usuarios/cargarUsuarios',{
      headers: {
        'mytoken':token
      }
    })
  }
}
