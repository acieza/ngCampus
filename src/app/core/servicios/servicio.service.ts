import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carta } from 'src/app/pages/local/carta/carta';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }


  getAllCurso(){
    return this.http.get<Carta[]>('http://192.168.1.47:3000/cursos');
  }
}
