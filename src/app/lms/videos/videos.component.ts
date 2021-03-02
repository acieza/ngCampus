import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SclasesService } from 'src/app/core/servicios/clases/sclases.service';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { Clase } from 'src/app/models/clase';
import { Curso } from 'src/app/models/curso';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  curso: Curso;
  form: FormGroup;
  clases: Clase[];

  identificaCurso="";

  constructor
  (
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private sclasesService: SclasesService,
    private servicioService: ServicioService
  ) {
    this.buildForm();
   }

   ngOnInit(): void {
    this.activatedRouter.params.subscribe((params: Params)=>{       
      this.identificaCurso=params.id
      this.servicioService.getClasePopu(this.identificaCurso)
      .subscribe(curso =>{
        for(let i = 0;i < curso.clases.length; i++ ){
          this.anadirObClase();
        }
        
        this.form.patchValue(curso);
        this.curso = curso
        console.log(this.form.value)
        console.log(this.curso)
      })
     // this.cargaPopulate();
      this.getAllClases();
    })
  }

  private buildForm(){
    this.form = this.fb.group({    
       titulo: ['', Validators.required],
       clases: new FormArray([])
    })
  }

  Objclase(){
    return this.fb.group({
      _id:[''],
      nombre:[''],
      temas: [{nombreTema:[''], detalle:['']}]   
    })
 }

 get leerClase(){
  return this.form.get('clases')as FormArray;
}

anadirObClase(){
  this.leerClase.push(this.Objclase())
}

getAllClases(){
  this.sclasesService.getClases()
  .subscribe(resp=>{
    this.clases = resp;
  })
}
verCurso(){
  console.log(this.form.value)
}

}
