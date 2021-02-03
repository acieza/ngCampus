import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { SubirService } from 'src/app/core/servicios/subir/subir.service';
import { Usuario } from 'src/app/models/usuario';
import { queSeanIguales } from 'src/app/util/validadorPersonal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent {

  form: FormGroup;

  public usuario:Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private subirService: SubirService
  ) {
    this.usuario = this.authService.usuario;
    this.buildForm();
   
   }

  
    private buildForm(){
      this.form = this.formBuilder.group({
        img: [this.usuario.img],
        nombre: [this.usuario.nombre, Validators.required],
        email: [this.usuario.email, [Validators.email,Validators.required]],
        password: ['',[Validators.required,Validators.minLength(5)]],
        vpassword: ['',[Validators.required,Validators.minLength(5)]]
      },{
        validators: queSeanIguales,
      })
    }

    get cambiaFoto(){
      return this.form.get('img');
      
    }
    
   uploadFile(event){
     const file = event.target.files[0];

     const formData = new FormData();
     formData.append('imagen',file);

     this.subirService.subirFoto(formData)
     .subscribe((resp:any) =>{
      
      console.log(resp.nombre);

      this.cambiaFoto.setValue( resp.nombre);
      this.usuario.img = resp.nombre;
     },(err) =>{
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text: err.error.msg,         
      })     
     });

   }

   modificarUsuario(event: Event){
     event.preventDefault();
     console.log(this.form.value);
    this.authService.modificarUser(this.form.value)
    .subscribe((resp:any) =>{
      
      //console.log(resp.nombre);
console.log('*******OK******')
      // this.cambiaFoto.setValue( resp.nombre);
      // this.usuario.img = resp.nombre;
     },(err) =>{
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text: err.error.msg,         
      })     
     });

   }


}
