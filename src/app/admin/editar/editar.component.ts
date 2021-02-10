import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { SubirService } from 'src/app/core/servicios/subir/subir.service';
import { Carta } from 'src/app/pages/local/carta/carta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  form: FormGroup;

    public curso:Carta;

  constructor(
    // private formBuilder: FormBuilder,
    private servicioService: ServicioService,
    private subirService: SubirService
    ) { 
      this.curso = this.servicioService.curso;
      // this.buildForm();
    }

    // private buildForm(){
    //   this.form = this.formBuilder.group({
    //      imgagen: [this.curso.imagen],
    //      imgagen2: [this.curso.imagen2],
    //     titulo: [this.curso.titulo, Validators.required],
    //     titulo2: [this.curso.titulo2, Validators.required],
    //     descripcion: [this.curso.descripcion, Validators.required],
    //     descripcionGeneral: [this.curso.descripcionGeneral, Validators.required],
    //     precio: [this.curso.precio, Validators.required],
    //     tiempo: [this.curso.tiempo, Validators.required],
    //   })
    // }

    get cambiaFoto(){
      return this.form.get('imagen');
      
    }
    
   uploadFile(event){
     const file = event.target.files[0];

     const formData = new FormData();
     formData.append('imagen',file);

     this.subirService.subirFoto(formData)
     .subscribe((resp:any) =>{
      
      console.log(resp.nombreImg);

      this.cambiaFoto.setValue( resp.nombreImg);
      this.curso.imagen = resp.nombreImg;
      this.curso.imagen2 = resp.nombreImg;
     },(err) =>{
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text: err.error.msg,         
      })     
     });

   }
//    modificarCurso(event: Event){
//     event.preventDefault();
//     console.log(this.form.value);

//    this.servicioService.modificarCurso(this.form.value)
//    .subscribe((resp:any) =>{
     
// console.log('*******OK******')

//     },(err) =>{
//      Swal.fire({
//        icon:'error',
//        title:'Oops...',
//        text: err.error.msg,         
//      })     
//     });

  

}
