import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SclasesService } from 'src/app/core/servicios/clases/sclases.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-anadirc',
  templateUrl: './anadirc.component.html',
  styleUrls: ['./anadirc.component.css']
})
export class AnadircComponent  {

  form: FormGroup;
  idCurso="";

  constructor(
    private fb: FormBuilder,
    private sclaseService: SclasesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
      this.buildForm();
     }
     
     ngOnInit(): void{
      this.activatedRoute.params.subscribe((params: Params)=>{
        this.idCurso = params.id;
      })
     }

  

  buildForm(){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      temas:  this.fb.array([])
    })
  }

  nuevoTema(){
    return this.fb.group({
      nombreTema: ['', Validators.required],
      link: ['', Validators.required],
      detalle: ['', Validators.required]
    })
  }

  get temasArchivos(){
    return this.form.get("temas") as FormArray
  }

  anadirNuevoTema(){
    this.temasArchivos.push(this.nuevoTema())
  }

  grabar(){
    console.log(this.form.value)
  }

  crearClase(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    this.sclaseService.createClase(this.form.value, this.idCurso)
    .subscribe(newClase =>{
      console.log('******* Clase Guardada ********');
          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Clase Guardada con éxito',
            showConfirmButton: false,
            timer: 1500
          });
            // this.router.navigateByUrl('Admin/Cursos')
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
