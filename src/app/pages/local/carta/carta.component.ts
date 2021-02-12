import { Component, Input, OnInit } from '@angular/core';
import { Carta } from './carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() datoscurso: Carta;

  constructor() { }

  ngOnInit(): void {
  }

  get devuelveImagen(){
    if(this.datoscurso.imagen){
        return `http://localhost:3000/imgCurso/${this.datoscurso.imagen}`;
    }else{
        return `assets/img/user.png`;
    }
}


  

}
