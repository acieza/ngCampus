import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { Carta } from 'src/app/pages/local/carta/carta';
import Swal from 'sweetalert2';

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
    
    borrarCurso(id:string){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.servicioService.deleteCurso(id)
          .subscribe( resp =>{
            this.cargaCurso()
            console.log('*****BORRADO*****')
          })
        }
      })
         
        }
      }

    

  


  

