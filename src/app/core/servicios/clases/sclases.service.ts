import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Clase } from 'src/app/models/clase';

@Injectable({
  providedIn: 'root'
})
export class SclasesService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getClases(){
   
    return this.http.get<Clase[]>('http://localhost:3000/clases')
   
  }
  createClase(newClase:Clase, id:string){
    
    return this.http.post<Clase>(`http://localhost:3000/clases/${id}`, newClase,{
     
    })
  }
}
