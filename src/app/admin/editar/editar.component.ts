import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { SubirService } from 'src/app/core/servicios/subir/subir.service';
import { Curso } from 'src/app/models/curso';
import { Carta } from 'src/app/pages/local/carta/carta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  form: FormGroup;
  identificaCurso="";
    curso:Curso;


    

  constructor(
    private formBuilder: FormBuilder,
    private activateRouter: ActivatedRoute,
    private servicioService: ServicioService,
    private subirService: SubirService,
    private router: Router
    ) { 
      this.buildForm();  
    //this.cargaCurso(this.identificaCurso);
    }

ngOnInit(){
  this.activateRouter.params.subscribe((params: Params)=>{       
    this.identificaCurso=params.id
    this.servicioService.getCurso(this.identificaCurso)
    .subscribe(curso =>{
      this.form.patchValue(curso);
    })
    // this.cargaCurso(this.identificaCurso); 
})
}
    // // cargaCurso(id:string){
    // //   this.servicioService.getCurso(id)
    // //   .subscribe(curso =>{
    // //     this.curso = curso;
        
    // //   })    
    // }
    private buildForm(){
      this.form = this.formBuilder.group({
         imagen: [''],
         imagen2: [''],
        titulo: ['', Validators.required],
        titulo2: ['', Validators.required],
        descripcion: ['', Validators.required],
        descripcionGeneral: ['', Validators.required],
        precio: ['', Validators.required],
        tiempo: ['', Validators.required],
        oferta: [''],
        
      })
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
   modificarCurso(event: Event){
    event.preventDefault();
    console.log(this.form.value);

   this.servicioService.modificarCurso(this.identificaCurso, this.form.value)
   .subscribe((resp:any) =>{
     
     console.log('*******Curso Editado con Exito******')
     Swal.fire({
       //position: 'top-end',
       icon: 'success',
       title: 'Curso Editado con éxito',
       showConfirmButton: false,
       timer: 1500
     });
     this.router.navigateByUrl(`/admin/Cursos`)

   }, (err) => {
    Swal.fire({
      icon:'error',
      title:'Oops...',
      text: err.error.msg,         
    })     
   });


  }
}
