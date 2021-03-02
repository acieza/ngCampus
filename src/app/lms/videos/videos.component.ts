import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { SclasesService } from 'src/app/core/servicios/clases/sclases.service';
import { ServicioService } from 'src/app/core/servicios/servicio.service';
import { Clase } from 'src/app/models/clase';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  identificaCurso="";
  // usuario: Usuario;
  // cursos: Curso[]=[];
  clases: Clase[]=[];
  link=""
  detalle=""

  constructor
    (private servicioService: ServicioService,
      private activateRouter: ActivatedRoute,
      private sanitizer: DomSanitizer
      ) {}

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params: Params)=>{       
      this.identificaCurso=params.id
      this.getPopuClases(this.identificaCurso)     
    })
    
  }
  getPopuClases(id:string){
    this.servicioService.getClasePopu(id)
    .subscribe(curso =>{
      this.clases = curso.clases;
      console.log(this.clases)
    })
  }

  pasaValor(link: string,detalle: string ){
    this.link = link;
    this.detalle = detalle
  }

  video(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }
}
