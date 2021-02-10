import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Carta } from 'src/app/pages/local/carta/carta';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  curso: Carta;

  constructor(
    private http: HttpClient,

    ) { }


  getAllCurso(){
    return this.http.get<Carta[]>('http://localhost:3000/cursos');
  }

  deleteCurso(id:string){
    const token = localStorage.getItem('token') || ''
    return this.http.delete<Carta>(`http://localhost:3000/cursos/${id}`,{
      headers: {
        'mytoken':token
      }
    })
  }

  // modificarCurso(putCurso: Carta){
  //   const token = localStorage.getItem('token') || ''
  //   return this.http.put<Carta>(`http://localhost:3000/cursos/${this.curso._id}`, putCurso, {
  //     headers: {
  //       'mytoken':token
  //     }});
  // }

  createCurso(newCurso:Carta){
    return this.http.post<Carta>('http://localhost:3000/cursos', newCurso);
  }
}
