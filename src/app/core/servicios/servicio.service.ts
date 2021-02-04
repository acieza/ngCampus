import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carta } from 'src/app/pages/local/carta/carta';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }


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
}
