import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form: FormGroup;
  usuario: Usuario;

  identificaUSer="";

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
      this.identificaUSer=params.id
      this.authService.getUnUser(this.identificaUSer)
      .subscribe(curso =>{
        this.form.patchValue(curso);
      })
      this.cargaUser(this.identificaUSer); 
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

}
