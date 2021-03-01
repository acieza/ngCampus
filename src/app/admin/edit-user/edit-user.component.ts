import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { Usuario } from 'src/app/models/usuario';
import { Carta } from 'src/app/pages/local/carta/carta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  usuario: Usuario;
  form: FormGroup;
  form2: FormGroup;
  cursos: Carta[];

  identificaUser="";

  constructor(
    private formBuilder: FormBuilder,
    private activateRouter: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private servicioService: ServicioService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params: Params)=>{       
      this.identificaUser=params.id
      this.authService.getCursoPopu(this.identificaUser)
      .subscribe(usuario =>{
        for(let i = 0;i < usuario.cursos.length; i++ ){
          this.anadirObCurso();
        }
        this.form.patchValue(usuario);
        this.usuario = usuario
        console.log(this.form.value)
        console.log(this.usuario)
      })
     // this.cargaPopulate();
      this.getAllCursos();
    })
  }

  // cargaUser(id:string){
  //   this.authService.getUnUser(id)
  //   .subscribe(usuario =>{
  //     this.usuario = usuario;
      
  //   })    
  // }

  private buildForm(){
    this.form = this.formBuilder.group({
       img: [''],
      nombre: ['', Validators.required],
      email: ['', Validators.required],   
      role: ['', Validators.required],   
      cursos:  new FormArray([])
    })
  }
Objcurso(){
   return this.formBuilder.group({
     _id:[''],
     titulo:[''],
   
   })
}
get leerCurso(){
    return this.form.get('cursos')as FormArray;
  }
  // muestraCurso(){
  //   return this.form.get('cursos')as FormArray;
  // }
anadirObCurso(){
  this.leerCurso.push(this.Objcurso())
}
eliminarCurso(id: number){
  this.leerCurso.removeAt(id);
  console.log(this.form.value)
}
  verUser(){
    console.log(this.form.value)
  }

//   get devuelveImagen(){
//     if(this.usuario.img){
//         return `http://localhost:3000/img/${this.usuario.img}`;
//     }else{
//         return `assets/img/user.png`;
//     }
// }

get devuelveImagen(){
  if(this.usuario){

  if(this.usuario.img == null || this.usuario.img == ""){
    return `assets/img/user.png`;
  }else{
    return `http://localhost:3000/img/${this.usuario.img}`;
  }
}
}

  modificarUser(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    
    this.form2=this.form;
    this.form2.setValue(this.form.value);
    
    console.log('*******Form2******')
    //this.form2.value.cursos.length
    
    for(let x=0; x<this.form2.value.cursos.length;x++){
      this.form2.value.cursos[x]=this.form.value.cursos[x]._id;
    }
    console.log(this.form2.value)

   this.authService.modificarUnUser(this.identificaUser, this.form2.value)
   .subscribe((resp:any) =>{
     
     console.log('*******Usuario Editado con Exito******')
     Swal.fire({
       //position: 'top-end',
       icon: 'success',
       title: 'Usuario Editado con éxito',
       showConfirmButton: true,
       timer: 1500
     });
     this.router.navigateByUrl(`/admin/Usuarios`)

   }, (err) => {
    Swal.fire({
      icon:'error',
      title:'Oops...',
      text: err.error.msg,         
    })     
   });


  }
    // cargaPopulate(){
    //   this.authService.getCursoPopu()
    //   .subscribe(resp=>{
    //     this.usuario = resp;
    //   })
    // }

  getAllCursos(){
    this.servicioService.getAllCurso()
    .subscribe(resp=>{
      this.cursos = resp;
    })
  }


  borrarCurso(id: string){
    console.log(this.form.value);
  }
}
