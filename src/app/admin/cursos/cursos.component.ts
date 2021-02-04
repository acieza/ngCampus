import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { Carta } from 'src/app/pages/local/carta/carta';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent  {

  cartas:Carta[];

  constructor(
   private servicioService: ServicioService,
   private router: Router,   
    ) {
      this.cargaCurso()
    }

    cargaCurso(){
      this.servicioService.getAllCurso()
      .subscribe(cartas =>{
        this.cartas = cartas;
      })
    }

  

  



}
