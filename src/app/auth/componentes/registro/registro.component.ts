import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/servicios/usuarios/usuarios.service';
import { queSeanIguales } from 'src/app/util/validadorPersonal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {


  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuariosService: UsuariosService,
  ) { 
    this.builForm();
  }

  private builForm(){
      this.form = this.formBuilder.group({
        nombre:['', Validators.required],
        email:['', [Validators.required,Validators.email]],
        password:['', [Validators.required,Validators.minLength(5)]],
        vpassword:['',[Validators.required,Validators.minLength(5)]],
        term:['',Validators.requiredTrue]
      },{
        validators: queSeanIguales,
      })
    }


    crearUsuario(event: Event){
      event.preventDefault();
      console.log(this.form.value);
      this.usuariosService.createUser(this.form.value)
      .subscribe(newUser =>{
        console.log('******* Usuario Guardado ********');
            Swal.fire({
              //position: 'top-end',
              icon: 'success',
              title: 'Usuario Guardado con éxito',
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

    compararPassword():boolean{
      return this.form.hasError('noIguales') && 
             this.form.get('password').dirty &&
             this.form.get('vpassword').dirty;
    }
  }
 
