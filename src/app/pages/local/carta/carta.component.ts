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

}
