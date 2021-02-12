import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { SubirService } from 'src/app/core/servicios/subir/subir.service';
import { Curso } from 'src/app/models/curso';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  form: FormGroup;

  curso:Curso;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private servicioService: ServicioService,
    private subirService: SubirService
  ) { 
    this.builForm()
  }

  ngOnInit(): void {
  }

  private builForm(){
    this.form = this.formBuilder.group({
      imagen:['',Validators.required],
      imagen2:['', Validators.required],
      titulo:['', Validators.required],
      titulo2:['',Validators.required],
      descripcion:['',Validators.required],
      descripcionGeneral:['',Validators.required],
      precio:['',Validators.required],
      tiempo:['',Validators.required],
      oferta:['']
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
            this.router.navigateByUrl(`admin/Cursos`)
    },(err)=>{         
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text: err.error.msg,         
      })     
    }
    );
  }

  get cambiaFoto(){
    return this.form.get('imagen');
    
  }
  get cambiaFoto2(){
    return this.form.get('imagen2');
    
  }

  uploadFile(event){
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('imagen',file);

    this.subirService.subirFotoC(formData)
    .subscribe((resp:any) =>{
     
     console.log(resp.nombreImg);

     this.cambiaFoto.setValue( resp.nombreImg);
    
     //this.curso.imagen = resp.nombreImg;
    // this.curso.imagen2 = resp.nombreImg;
    },(err) =>{
     Swal.fire({
       icon:'error',
       title:'Oops...',
       text: err.error.msg,         
     })     
    });

  }

  uploadFile2(event){
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('imagen',file);

    this.subirService.subirFotoC(formData)
    .subscribe((resp:any) =>{
     
     console.log(resp.nombreImg);

     this.cambiaFoto2.setValue( resp.nombreImg);
    
     //this.curso.imagen = resp.nombreImg;
    // this.curso.imagen2 = resp.nombreImg;
    },(err) =>{
     Swal.fire({
       icon:'error',
       title:'Oops...',
       text: err.error.msg,         
     })     
    });

  }

 
}

