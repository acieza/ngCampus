import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private servicioService: ServicioService,
  ) { 
    this.builForm()
  }

  ngOnInit(): void {
  }

  private builForm(){
    this.form = this.formBuilder.group({
      imagen:['',],
      imagen2:[''],
      titulo:['', Validators.required],
      titulo2:['',Validators.required],
      descripcion:['',Validators.required],
      descripcionGeneral:['',Validators.required],
      precio:['',Validators.required],
      tiempo:['',Validators.required],
      oferta:['',Validators.required]
    })
    
  }

  crearCurso(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    this.servicioService.createCurso(this.form.value)
    .subscribe(newCurso =>{
      console.log('******* Curso Guardado ********');
          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Curso Guardado con éxito',
            showConfirmButton: false,
            timer: 1500
          });
            this.router.navigateByUrl('auth')
    },(err)=>{console.log(err.error.msg)         
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text: err.error.msg,         
      })     
    }
    );
  }
}