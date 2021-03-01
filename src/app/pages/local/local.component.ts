import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { Carta } from './carta/carta';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  cartas:Carta[]
  nombre = "";
  img="";
  token = false;
  role = "";
  cursos=[];
  constructor(
    private servicioService: ServicioService,
    private authService: AuthService
  ) { 
    this.cargaTR()
    console.log(this.nombre)
    console.log(this.role)
    console.log(this.img)
    console.log(this.cursos)
  }

  ngOnInit(): void {
    this.cargaCurso();
  }

  cargaCurso(){
    this.servicioService.getAllCurso()
    .subscribe(cartas =>{
      this.cartas = cartas;
    })
  }
  cerrarSesion(){
    this.authService.logout()
  }
  cargaTR(){
    if(localStorage.getItem('token')){
      this.role = this.authService.tokenRol.role;
      this.token = true;
      this.nombre = this.authService.tokenRol.nombre
      this.cursos = this.authService.tokenRol.cursos
      if(this.authService.tokenRol.img){
        this.img = `http://localhost:3000/img/${this.authService.tokenRol.img}`
      }else{
        this.img = `assets/img/user.png`;
      }
    }else{
      this.token = false;
    }
  }

  

  
    // {
    //   _id:"string",
    //   imagen: "string",
    //   imagen2:" string",
    //   titulo: "string",
    //   titulo2: "string",
    //   descripcion: "string",
    //   descripcion2: "string",
    //   descripcionGeneral: "string",
    //   link: "string",
    //   precio: 0,
    //   tiempo: 0

    // },
    // {
    //   _id:"string",
    //   imagen: "string",
    //   imagen2:" string",
    //   titulo: "string",
    //   titulo2: "string",
    //   descripcion: "string",
    //   descripcion2: "string",
    //   descripcionGeneral: "string",
    //   link: "string",
    //   precio: 0,
    //   tiempo: 0

    // }
  

}
