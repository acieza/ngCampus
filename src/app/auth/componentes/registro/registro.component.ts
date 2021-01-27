import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/servicios/usuarios/usuarios.service';

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
        term:['',Validators.required]
      })
    }


    crearUsuario(event: Event){
      event.preventDefault();
      console.log(this.form.value);
      this.usuariosService.createUser(this.form.value)
      .subscribe(newUser =>{
        console.log('******* Usuario Guardao ********');
      },(err)=>console.log(err.error.msg)
      );
    }
  }
 
