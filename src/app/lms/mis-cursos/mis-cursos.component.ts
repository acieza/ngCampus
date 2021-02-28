import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { Usuario } from 'src/app/models/usuario';
import { Carta } from 'src/app/pages/local/carta/carta';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent  {

  identificaUser="";
  usuario:Usuario;
  cursos: Carta[];

 

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private servicioService: ServicioService
  ) 
    {
  //    this.getAllCursosID()
    }

// getAllCursosID(){
//   this.activatedRoute.params.subscribe((params: Params)=>{
//     this.identificaUser=params.id
//   this.authService.getCursoPopu(this.identificaUser)
//   .subscribe(usuario => {
//     this.usuario = usuario;
//     console.log(this.usuario)
//   })
//   this.getAllCursos();
// })
// }

// getAllCursos(){
//   this.servicioService.getAllCurso()
//   .subscribe(resp=>{
//     this.cursos = resp;
//   })
// }
}