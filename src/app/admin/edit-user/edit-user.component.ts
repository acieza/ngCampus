import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form: FormGroup;
  usuario: Usuario;

  identificaUser="";

  constructor(
    private formBuilder: FormBuilder,
    private activateRouter: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params: Params)=>{       
      this.identificaUser=params.id
      this.authService.getUnUser(this.identificaUser)
      .subscribe(curso =>{
        this.form.patchValue(curso);
      })
      this.cargaUser(this.identificaUser); 
    })
  }

  cargaUser(id:string){
    this.authService.getUnUser(id)
    .subscribe(usuario =>{
      this.usuario = usuario;
      
    })    
  }

  private buildForm(){
    this.form = this.formBuilder.group({
       img: [''],
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],     
    })
  }

  verUser(){
    console.log(this.form.value)
  }

  modificarUser(event: Event){
    event.preventDefault();
    console.log(this.form.value);

   this.authService.modificarUnUser(this.identificaUser, this.form.value)
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

}
