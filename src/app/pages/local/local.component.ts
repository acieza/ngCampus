import { Component, OnInit } from '@angular/core';
import { Carta } from './carta/carta';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  cartas:Carta[]=[
    {
      _id:"string",
      imagen: "string",
      imagen2:" string",
      titulo: "string",
      titulo2: "string",
      descripcion: "string",
      descripcion2: "string",
      descripcionGeneral: "string",
      link: "string",
      precio: 0,
      tiempo: 0

    },
    {
      _id:"string",
      imagen: "string",
      imagen2:" string",
      titulo: "string",
      titulo2: "string",
      descripcion: "string",
      descripcion2: "string",
      descripcionGeneral: "string",
      link: "string",
      precio: 0,
      tiempo: 0

    }
  ]

}
