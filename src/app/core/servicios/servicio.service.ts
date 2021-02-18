import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { Carta } from 'src/app/pages/local/carta/carta';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  

  constructor(
    private http: HttpClient,

    ) { }


  getAllCurso(){
    return this.http.get<Carta[]>('http://localhost:3000/cursos');
  }

  getCurso(id:string){
    const token = localStorage.getItem('token') || ''
    return this.http.get<Curso>(`http://localhost:3000/cursos/${id}`,{
      headers: {
        'mytoken':token
      }});
  }

  deleteCurso(id:string){
    const token = localStorage.getItem('token') || ''
    return this.http.delete<Carta>(`http://localhost:3000/cursos/${id}`,{
      headers: {
        'mytoken':token
      }
    })
  }

  modificarCurso(id: string, putCurso: Carta){
    const token = localStorage.getItem('token') || ''
    return this.http.put<Carta>(`http://localhost:3000/cursos/${id}`, putCurso, {
      headers: {
        'mytoken':token
      }});
  }

  createCurso(newCurso:Carta){
    const token = localStorage.getItem('token') || ''
    return this.http.post<Carta>('http://localhost:3000/cursos', newCurso,{
      headers: {
        'mytoken':token
      }
    })
  }
  
 
  
}
